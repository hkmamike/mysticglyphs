'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.SubmitScore = functions.database.ref('/User/{UserID}/Input/SubmitScore/').onWrite(event => {
	var Input = event.data.val();
	var City = Input.substring(0, Input.indexOf('_'));
	var Mission = Input.substring(0, Input.indexOf(','));
	var groupName = Input.substring(Input.indexOf(',') + 1,Input.indexOf('@'));

	if (Mission=='warmUp') {
		console.log ('warm up condition');
		return 'warming up function - SubmitScore';
	} else {
			var UserID = event.params.UserID;
			admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission + '/ScoreSubmitted/').once('value', function(snapshot) {
				if (snapshot.val()==null) {
					//Submit Score
					var newPostKey = admin.database().ref().child('/Leaderboard/'+ Mission).push().key;
					var updates = {};
					var updatesUser = {};
					var Duration;
					var CurrentTime;
					admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission + '/Duration/').once('value', function(snapshot) {
						Duration = snapshot.val();
						CurrentTime = new Date();
						updates['/Leaderboard/' + Mission + '/' + newPostKey + '/GroupName/'] = groupName;
						updates['/Leaderboard/' + Mission + '/' + newPostKey + '/Score/'] = Duration;
						updates['/Leaderboard/' + Mission + '/' + newPostKey + '/Time/'] = CurrentTime;
						admin.database().ref().update(updates);

						updatesUser['/User/'+ UserID +'/Record/Leaderboard/' + newPostKey + '/GroupName/'] = groupName;
						updatesUser['/User/'+ UserID +'/Record/Leaderboard/' + newPostKey + '/Score/'] = Duration;
						updatesUser['/User/'+ UserID +'/Record/Leaderboard/' + newPostKey + '/Time/'] = CurrentTime;
						updatesUser['/User/'+ UserID +'/Output/SubmitScore'] = '1,'+ Date.now();
						updatesUser['/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission + '/ScoreSubmitted/'] = 'Yes';
						admin.database().ref().update(updatesUser);

						console.log ('Score submission success');

					});
				} else {
					console.log ('Score has already been submitted');
					admin.database().ref('/User/'+ UserID +'/Output/SubmitScore').set('0,'+ Date.now());
				}
			});
		}
});

exports.EnrollMission = functions.database.ref('/User/{UserID}/Input/EnrollMission/').onWrite(event => {

	var Input = event.data.val();
	var City = Input.substring(0, Input.indexOf('_'));
	var Mission = Input;

	if (City=='warmUp') {
		console.log ('warm up condition');
		return 'warming up function - EnrollMission';
	} else {
			var UserID = event.params.UserID;
			admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission).once('value', function(snapshot) {
				//Let client know request is being processed
				admin.database().ref('/User/'+ UserID +'/Output/EnrollMission').set('1,'+ Date.now());
				if (snapshot.val()==null) {
					admin.database().ref('/User/'+ UserID +'/Output/EnrollMission').set('2,'+ Date.now());
					//Copy Mission
					admin.database().ref('/DatabaseInfo/MissionInfo/' + City + '/' + Mission).once('value', function(snapshot) {
						admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission).set(snapshot.val());
						//Let the client know mission is ready
						admin.database().ref('/User/'+ UserID +'/Output/EnrollMission').set('3,'+ Date.now());
					});
				}
			});
		}
});

exports.StartTimer = functions.database.ref('/User/{UserID}/Input/TimerStart/').onWrite(event => {

	var Input = event.data.val();
	var City = Input.substring(0, Input.indexOf('_'));
	var Mission = Input.substring(0, Input.indexOf(','));
	var TimeStamp = Input.substring(Input.indexOf(',') + 1,Input.length);

	if (Mission=='warmUp') {
		console.log ('warm up condition');
		return 'warming up function - StartTimer';
	} else {
			var UserID = event.params.UserID;

			admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission + '/StartTimeStamp/').once('value', function(snapshot) {
				if (snapshot.val()==null) {
					//Make Time Stamp
					admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission + '/StartTimeStamp/').set(Date.now());
				}
			});
		}
});

exports.NewUser = functions.auth.user().onCreate(event => {
	const userInfo = event.data;
	console.log (userInfo);

	admin.database().ref('/User/'+ userInfo.uid +'/'+ 'UserInfo' + '/' + 'UserEmail'+'/').set(userInfo.email);
	admin.database().ref('/User/'+ userInfo.uid +'/'+ 'UserInfo' + '/'+ 'UserName'+'/').set(userInfo.displayName);
	admin.database().ref('/User/'+ userInfo.uid +'/'+ 'UserInfo' + '/'+ 'UserPict'+'/').set(userInfo.photoURL);
	admin.database().ref('/User/'+ userInfo.uid +'/' + 'Output' + '/' + 'GlyphUnlock' + '/').set('2,'+ Date.now());
	admin.database().ref('/User/'+ userInfo.uid +'/' + 'Output' + '/' + 'EnrollMission' + '/').set('0,'+ Date.now());
	admin.database().ref('/User/'+ userInfo.uid +'/' + 'Output' + '/' + 'SubmitScore' + '/').set('2,'+ Date.now());

});


// exports.MissionComplete = functions.database.ref('/User/{UserID}/Input/MissionComplete/').onWrite(event => {

// 	var UserID= event.params.UserID;
// 	var Input = event.data.val();
// 	var City = Input.substring(0, Input.indexOf('_'));
// 	var Campaign = Input.substring(0, Input.indexOf('_') + 2);
// 	var CurrentMission = Input;
// 	var CurrentMissionNumber = Input.substring(Input.indexOf('_') + 3, Input.indexOf('_') + 4);
// 	var NextMissionNumber = parseInt(CurrentMissionNumber) + 1;
// 	var NextMission = Campaign + '_' + NextMissionNumber;

// 	//Check if 4 token Unlocked for Pending Mission
// 	admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Campaign/' + Campaign + '/Mission/' + CurrentMission).on('value', function(snapshot) {
// 		var MissionStatus = snapshot.val().MissionStatus;
// 		var AllToken = snapshot.val().Token;
// 		var TokenUnlocked = 0
// 		if (AllToken[CurrentMission + '_1'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1};
// 		if (AllToken[CurrentMission + '_2'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1};
// 		if (AllToken[CurrentMission + '_3'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1};
// 		if (AllToken[CurrentMission + '_4'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1};
// 		if (AllToken[CurrentMission + '_5'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1};
// 		if (AllToken[CurrentMission + '_6'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1};
		
// 		if (TokenUnlocked >= 4 && MissionStatus == 'Current'){
// 			//Update Current Mission Status to Completed
// 			admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Campaign/' + Campaign + '/Mission/' + CurrentMission + '/MissionStatus/').set('Completed');
// 			//Check Compaign Paid Status
// 			admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Campaign/' + Campaign + '/CampaignType/').on('value', function(snapshot) {
// 				if (snapshot.val() == 'Free' || snapshot.val() == 'Paid Unlocked'){
// 					//Copy Next Mission to User Database
// 					admin.database().ref('/User/'+ UserID +'/Unlocked/Mission/' + CurrentMission).set(Date());
// 					admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Campaign/' + Campaign + '/MissionCompleted/').set(CurrentMissionNumber);
// 					admin.database().ref('/DatabaseInfo/MissionInfo/' + NextMission ).on('value', function(snapshot) {	
// 						admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Campaign/' + Campaign + '/Mission/' + NextMission).set(snapshot.val());
// 					});
// 				}
// 			});
// 		}

// 	});

// });

exports.UnlockToken = functions.database.ref('/User/{UserID}/Input/ClaimToken/').onWrite(event => {
	var Input = event.data.val();
	var Token = Input.substring(0, Input.indexOf(","));

	if (Token=='warmUp') {
		console.log ('warm up condition');
		return 'warming up function - UnlockToken';
	} else {
			var UserID= event.params.UserID;
			var TokenCode = Input.substring(Input.indexOf(",") + 1, Input.indexOf("@"));
			var City = Token.substring(0, Token.indexOf("_"));
			var Mission = Token.substring(0, Token.indexOf("_") + 4);
			admin.database().ref('/DatabaseInfo/TokenInfo/' + Token + '/TokenCode/' ).once('value', function(snapshot) {
				//Check Token Validaty
				if (snapshot.val() == TokenCode) {
					//Let client know the code works
					admin.database().ref('/User/'+ UserID +'/Output/GlyphUnlock').set('1,'+ Date.now());
					admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission).once('value', function(snapshot) {
						//Check if Mission Exist
						if (snapshot.val() !== null) {
							var AllToken = snapshot.val().Token;
							admin.database().ref('/User/'+ UserID +'/Unlocked/Token/' + Token).set(Date.now());
							admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission +'/Token/'+ Token + '/ClaimStatus').set('Unlocked');
							//Initial value is set to 1 because snapshot is taken before Unlocking
							var TokenUnlocked = 1;
							if (AllToken[Mission + '_1'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1;}
							if (AllToken[Mission + '_2'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1;}
							if (AllToken[Mission + '_3'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1;}
							if (AllToken[Mission + '_4'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1;}
							if (AllToken[Mission + '_5'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1;}
							if (AllToken[Mission + '_6'].ClaimStatus == 'Unlocked') { TokenUnlocked = TokenUnlocked + 1;}
							//Record Unlock
							admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission +'/TokenUnlocked/').set(TokenUnlocked);
							//If TokenUnlocked >= 4 and EndTimeStamp is null, make EndTimeStamp
							if (TokenUnlocked >= 4) {
								admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission + '/EndTimeStamp/').once('value', function(snapshot) {
									if (snapshot.val()==null) {
										var EndTime = Date.now();
										//Make Time Stamp
										admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission + '/EndTimeStamp/').set(EndTime);
										//Make Time Stamp
										admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission + '/MissionStatus/').set('Complete');
										//Calculate Duration
										admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission + '/StartTimeStamp/').once('value', function(snapshot) {
											var StartTime = new Date(snapshot.val());
											var Duration = Math.floor((EndTime - StartTime)/1000);
											admin.database().ref('/User/'+ UserID +'/Record/' + City + '/Mission/' + Mission + '/Duration/').set(Duration);
										});
									}
								});
							}
							var newPostKey = admin.database().ref().child('/AllTokenClaimRecord/').push().key;
							var updates = {};
							updates['/AllTokenClaimRecord/' + Token + '/' + newPostKey] = new Date();
							admin.database().ref().update(updates);
						}
					});
				} else {
						console.log ('Mission:', Mission, 'Token:', Token, 'Result: Invalid GlyphCode');
						admin.database().ref('/User/'+ UserID +'/Output/GlyphUnlock').set('0,'+ Date.now());
				}
			});
		}
});