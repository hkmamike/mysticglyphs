'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.EnrollMission = functions.database.ref('/User/{UserID}/Input/EnrollMission/').onWrite(event => {

	var Input = event.data.val();
	var City = Input.substring(0, Input.indexOf('_'));
	var Mission = Input;

	if (City=='warmUp') {
		console.log ('warm up condition');
		return 'warming up function - EnrollMission';
	} else {
			var UserID = event.params.UserID;

			admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission).on('value', function(snapshot) {
				console.log('EnrollMission - City: ', City);
				console.log('EnrollMission - Mission: ', Mission);
				console.log('EnrollMission - user node snapshot: ', snapshot.val());

				//Let client know request is being processed
				admin.database().ref('/User/'+ UserID +'/Output/EnrollMission').set('1,'+ Date());

				if (snapshot.val()==null) {

					//Copy Mission
					admin.database().ref('/DatabaseInfo/MissionInfo/' + City + '/' + Mission).on('value', function(snapshot) {
						console.log('EnrollMission - mission to be copied', snapshot.val());
						admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission).set(snapshot.val());

						//Let the client know mission is ready
						admin.database().ref('/User/'+ UserID +'/Output/EnrollMission').set('2,'+ Date());
					});
				}
			});
		}
});

// exports.BeginMission = functions.database.ref('/User/{UserID}/Input/BeginMission/').onWrite()

exports.NewUser = functions.auth.user().onCreate(event => {
	const userInfo = event.data;
	console.log (userInfo)

	admin.database().ref('/User/'+ userInfo.uid +'/'+ 'UserInfo' + '/' + 'UserEmail'+'/').set(userInfo.email);
	admin.database().ref('/User/'+ userInfo.uid +'/'+ 'UserInfo' + '/'+ 'UserName'+'/').set(userInfo.displayName);
	admin.database().ref('/User/'+ userInfo.uid +'/'+ 'UserInfo' + '/'+ 'UserPict'+'/').set(userInfo.photoURL);
	admin.database().ref('/User/'+ userInfo.uid +'/'+ 'UserInfo' + '/'+ 'UserFB'+'/').set(userInfo.providerData.uid);

	admin.database().ref('/User/'+ userInfo.uid +'/'+ 'Input'+'/' + 'ClaimToken').set('null');
	admin.database().ref('/User/'+ userInfo.uid +'/'+ 'Input'+'/' + 'EnrollCampaign').set('null');
	admin.database().ref('/User/'+ userInfo.uid +'/'+ 'Input'+'/' + 'MissionComplete').set('null');

	admin.database().ref('/User/'+ userInfo.uid +'/Output/GlyphUnlock').set('2,'+ Date());
	admin.database().ref('/User/'+ userInfo.uid +'/Output/EnrollMission').set('0,'+ Date());
});


exports.MissionComplete = functions.database.ref('/User/{UserID}/Input/MissionComplete/').onWrite(event => {

	var UserID= event.params.UserID;
	var Input = event.data.val();
	var City = Input.substring(0, Input.indexOf('_'));
	var Campaign = Input.substring(0, Input.indexOf('_') + 2);
	var CurrentMission = Input;
	var CurrentMissionNumber = Input.substring(Input.indexOf('_') + 3, Input.indexOf('_') + 4);
	var NextMissionNumber = parseInt(CurrentMissionNumber) + 1;
	var NextMission = Campaign + '_' + NextMissionNumber;

	//Check if 4 token Unlocked for Pending Mission
	admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Campaign/' + Campaign + '/Mission/' + CurrentMission).on('value', function(snapshot) {
		var MissionStatus = snapshot.val().MissionStatus;
		var AllToken = snapshot.val().Token;
		var TokenUnlocked = 0
		if (AllToken[CurrentMission + '_1'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1};
		if (AllToken[CurrentMission + '_2'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1};
		if (AllToken[CurrentMission + '_3'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1};
		if (AllToken[CurrentMission + '_4'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1};
		if (AllToken[CurrentMission + '_5'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1};
		if (AllToken[CurrentMission + '_6'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1};
		
		if (TokenUnlocked >= 4 && MissionStatus == 'Current'){
			//Update Current Mission Status to Completed
			admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Campaign/' + Campaign + '/Mission/' + CurrentMission + '/MissionStatus/').set('Completed');
			//Check Compaign Paid Status
			admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Campaign/' + Campaign + '/CampaignType/').on('value', function(snapshot) {
				if (snapshot.val() == 'Free' || snapshot.val() == 'Paid Unlocked'){
					//Copy Next Mission to User Database
					admin.database().ref('/User/'+ UserID +'/Unlocked/Mission/' + CurrentMission).set(Date());
					admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Campaign/' + Campaign + '/MissionCompleted/').set(CurrentMissionNumber);
					admin.database().ref('/DatabaseInfo/MissionInfo/' + NextMission ).on('value', function(snapshot) {	
						admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Campaign/' + Campaign + '/Mission/' + NextMission).set(snapshot.val());
					});
				}
			});
		}

	});

});

exports.UnlockToken = functions.database.ref('/User/{UserID}/Input/ClaimToken/').onWrite(event => {

	var Input = event.data.val();
	var Token = Input.substring(0, Input.indexOf(","));

	console.log('Token is: ', Token);

	if (Token=='warmUp') {
		console.log ('warm up condition');
		return 'warming up function - UnlockToken';
	} else {
			var UserID= event.params.UserID;
			var TokenCode = Input.substring(Input.indexOf(",") + 1, Input.indexOf("@"));
			var City = Token.substring(0, Token.indexOf("_"));
			var Mission = Token.substring(0, Token.indexOf("_") + 4);

			admin.database().ref('/DatabaseInfo/TokenInfo/' + Token + '/TokenCode/' ).on('value', function(snapshot) {

				//Check Token Validaty
				if (snapshot.val() == TokenCode) {
					console.log ('Mission:', Mission, 'Token:', Token, 'Result: Valid GlyphCode');

					//Let client know the code works
					admin.database().ref('/User/'+ UserID +'/Output/GlyphUnlock').set('1,'+ Date());

					admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission).on('value', function(snapshot) {
						//Check Mission Exist
						if (snapshot.val() !== null) {
							var AllToken = snapshot.val().Token;
							admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission +'/Token/'+ Token + '/ClaimStatus').set('Unlocked');
							admin.database().ref('/User/'+ UserID +'/Unlocked/Token/' + Token).set(Date());
							
							var TokenUnlocked = 0;
							if (AllToken[Mission + '_1'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1}
							if (AllToken[Mission + '_2'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1}
							if (AllToken[Mission + '_3'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1}
							if (AllToken[Mission + '_4'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1}
							if (AllToken[Mission + '_5'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1}
							if (AllToken[Mission + '_6'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1}
							
							//Record Unlock
							admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission +'/TokenUnlocked/').set(TokenUnlocked);
						}
					});
				} else {
						console.log ('Mission:', Mission, 'Token:', Token, 'Result: Invalid GlyphCode');
						admin.database().ref('/User/'+ UserID +'/Output/GlyphUnlock').set('0,'+ Date());
				}
			});
		}
});