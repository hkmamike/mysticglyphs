angular.module('starter.controllers', [])


.controller('TempCtrl', function($scope, FirebaseUpload) {
	$scope.updateDatabase=function(){
		FirebaseUpload.updateDatabase();
	};
})

.controller('AppCtrl', function($scope, $timeout, $rootScope, $state, $stateParams, $firebaseObject, $ionicScrollDelegate, $ionicSlideBoxDelegate, $ionicModal, $ionicSideMenuDelegate) {

	// City & Mission List Objects------------------------------------------------------
	$scope.CityList = $firebaseObject(firebase.database().ref('/DatabaseInfo/' + '/CityCampaignInfo/'));
	$scope.MissionList = $firebaseObject(firebase.database().ref('/DatabaseInfo/' + '/MissionInfo/'));
	// ---------------------------------------------------------------------------------

	// INTRO------------------------------------------------------------------------

   // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('app.List');
    // Set a flag that we finished the tutorial
    window.localStorage['didTutorial'] = true;
  };

  // Check if the user already did the tutorial and skip it if so
	if(window.localStorage['didTutorial'] === "true") {
			console.log('Skip intro');
			$scope.startApp();
		}


	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		$ionicSlideBoxDelegate.slide(0);
	});

  $scope.toIntro = function(){
    window.localStorage['didTutorial'] = "false";
    $state.go('intro');
  };

  // Move to the next slide
  $scope.next = function() {
    $scope.$broadcast('slideBox.nextSlide');
  };

	// SIDE MENU------------------------------------------------------------------------
	$scope.toggleRightSideMenu = function() {
	$ionicSideMenuDelegate.toggleRight();
	};
	// ---------------------------------------------------------------------------------

	// LOGIN MODAL----------------------------------------------------------------------
	$scope.loginData = {};
	$ionicModal.fromTemplateUrl('templates/login.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.login = modal;
	});
	$scope.closeLogin = function() {
		$scope.login.hide();
	};
	$scope.openlogin = function() {
		$scope.login.show();
	};
	$scope.authPopup = function () {
		auth.signInWithRedirect(provider);
	};
	$scope.signOut = function () {
		auth.signOut();
		window.localStorage['hideLogin'] = false;
		$rootScope.userSignedIn = false;
		$rootScope.hideLogin = false;
	};

  // Check if the user is logging in
	if(window.localStorage['hideLogin'] === "true") {
			console.log('Hide Login');
			$rootScope.hideLogin = true;
		}

	$scope.loadingLogin = function () {
		window.localStorage['hideLogin'] = true;
	};

	firebase.auth().getRedirectResult().then(function(result) {
		userData.setUser(auth.currentUser);
	}).catch(function(error) {
	});
	// ---------------------------------------------------------------------------------

	// USER ACTION----------------------------------------------------------------------
	$scope.claimToken = function(TokenID, TokenPW) {
		console.log('Claim this token: ', TokenID, TokenPW);
		console.log('UserID: ', UserID);
		var TokenPWClean = TokenPW.toLowerCase().replace(/\s+/g,'');
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/ClaimToken/').set(TokenID + ',' + TokenPWClean + '@' + Date.now());

		//Warm up firebase functions by input triggers
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/EnrollMission/').set('warmUp_' + Date.now());
	};
	$scope.enrollMission = function(MissionID) {
		console.log('Enroll Mission: ', MissionID);
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/EnrollMission/').set(MissionID);
		//Warm up firebase functions by input triggers
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/ClaimToken/').set('warmUp,' + Date.now());
	};

	$scope.enrollMissionMessage = 'ready';
	$scope.enrollMessage = function() {
		$scope.enrollMissionMessage = 'processing';
	};

	$scope.startTimer = function (SelectedMission) {
		console.log ('Timer for Mission ', SelectedMission, ' starts now at ', Date.now());
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/TimerStart/').set(SelectedMission + ', ' + Date.now());
	};

	$scope.toggleInfo = function(info) {
    if ($scope.isInfoShown(info)) {
      $scope.shownInfo = null;
    } else {
      $scope.shownInfo = info;
    }
  };
  $scope.isInfoShown = function(info) {
    return $scope.shownInfo === info;
  };
  $scope.selectGlyph = function(SelectedMission, n) {
		$scope.TokenNumber = SelectedMission + '_' + n;
		$scope.glyphSelection = n;
  };
  $scope.scrollResize = function() {
		$timeout( function(){
			/*Resize the Scroll Area*/
			$ionicScrollDelegate.resize();
		},200);
  };
	// ---------------------------------------------------------------------------------

	// CLAIM TOKEN MODAL----------------------------------------------------------------
	$scope.TokenClaimData = {};
	$ionicModal.fromTemplateUrl('templates/tokenClaim.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.TokenClaim = modal;
	});
	$scope.closeTokenClaim = function() {
		$scope.TokenClaim.hide();
	};
	$scope.openTokenClaim = function(TokenNumber, SelectedMission, SelectedCity) {
		$scope.TokenClaim.code = '';
		$scope.TokenClaim.show();
		$scope.TokenNumber = TokenNumber;
		$scope.SelectedMission = SelectedMission;
		$scope.SelectedCity = SelectedCity;
	};

	$scope.glyphCodeSubmitMessage = 'ready';
	$scope.codeSubmitMessage = function() {
		$scope.glyphCodeSubmitMessage = 'submitting';
	};
	// ---------------------------------------------------------------------------------

	// UNLOCKED HINTS MODAL----------------------------------------------------------------
	$ionicModal.fromTemplateUrl('templates/unlockedHints.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.unlockedHints = modal;
	});
	$scope.closeUnlockedHints = function() {
		$scope.unlockedHints.hide();
	};
	$scope.openUnlockedHints = function(SelectedMission, SelectedCity) {
		$scope.unlockedHints.show();
		$scope.SelectedMission = SelectedMission;
		$scope.SelectedCity = SelectedCity;
	};
	// ---------------------------------------------------------------------------------

	// Image HINTS MODAL----------------------------------------------------------------
	$ionicModal.fromTemplateUrl('templates/imageHint.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.imageHint = modal;
	});
	$scope.closeImageHint = function() {
		$scope.imageHint.hide();
	};
	$scope.openImageHint = function(TokenNumber, SelectedMission, SelectedCity) {
		$scope.imageHint.show();
		$scope.TokenNumber = TokenNumber;
		$scope.SelectedMission = SelectedMission;
		$scope.SelectedCity = SelectedCity;
	};
	// ---------------------------------------------------------------------------------

	// USER INFO------------------------------------------------------------------------

	firebase.auth().onAuthStateChanged(function (user) {
		var FirebaseUser = firebase.auth().currentUser;
		$scope.UserInfo = $firebaseObject(firebase.database().ref('/User/' + FirebaseUser.uid + '/UserInfo/'));
		$scope.UserRecord = $firebaseObject(firebase.database().ref('/User/' + FirebaseUser.uid + '/Record/'));
		$scope.UserUnlockedToken = $firebaseObject(firebase.database().ref('/User/' + FirebaseUser.uid + '/Unlocked/Token/'));
		UserID = FirebaseUser.uid;

		//Flag for user's login status
		if (user) {
			$rootScope.userSignedIn = true;
		} else {
			$rootScope.userSignedIn = false;
		}

		//Warm up firebase functions by input triggers
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/EnrollMission/').set('warmUp_' + Date.now());
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/ClaimToken/').set('warmUp,' + Date.now());

		// CLOUD FUNCTION RESPONSES FOR GLYPH UNLOCK--------------------------------------------
		firebase.database().ref('/User/'+ UserID +'/Output/GlyphUnlock').on('value', function(snapshot) {
			var Output = snapshot.val();
			console.log ('GlyphValidation Output is:', Output);
			var Result = Output.substring(0,Output.indexOf(","));
			console.log ('GlyphValidation Result is:', Result);

			if (Result==1) {
				$scope.glyphCodeSubmitMessage = 'unlocked';
				$scope.$apply();
				console.log('Glyph Unlock Successful');
				$timeout( function(){
					/*Reset Output node*/
					firebase.database().ref('/User/'+ UserID +'/Output/GlyphUnlock').set('2,'+ Date.now());
					$scope.closeTokenClaim();
				},3000);
			} else if (Result==0) {
				$scope.glyphCodeSubmitMessage = 'unsuccessful';
				$scope.$apply();
				console.log('Glyph Unlock Unsuccessful, glyphCodeSubmitMessage: ', $scope.glyphCodeSubmitMessage);
				$timeout( function(){
					/*Reset Output node*/
					firebase.database().ref('/User/'+ UserID +'/Output/GlyphUnlock').set('2,'+ Date.now());
				},3000);
			} else {
				$scope.glyphCodeSubmitMessage = 'ready';
				$scope.$apply();
			}
		});

		// CLOUD FUNCTION RESPONSES FOR ENROLL MISSION--------------------------------------------
		firebase.database().ref('/User/'+ UserID +'/Output/EnrollMission').on('value', function(snapshot) {
			var Output = snapshot.val();
			console.log ('EnrollMission Output is:', Output);
			var Result = Output.substring(0,Output.indexOf(","));
			console.log ('EnrollMission Result is:', Result);

			if (Result==1) {
				$scope.enrollMissionMessage = 'processing';
				$scope.$apply();
				console.log('Checking mission availability');
				$timeout( function(){
					/*Reset Output node*/
					firebase.database().ref('/User/'+ UserID +'/Output/EnrollMission').set('0,'+ Date.now());
				},3000);
			} else if (Result==2) {
				$scope.enrollMissionMessage = 'unlocked';
				$scope.$apply();
				console.log('Mission enrollment has been completed');
				$timeout( function(){
					/*Reset Output node*/
					firebase.database().ref('/User/'+ UserID +'/Output/EnrollMission').set('0,'+ Date.now());
				},3000);
			} else if (Result==3) {
				$scope.enrollMissionMessage = 'unsuccessful';
				$scope.$apply();
				console.log('Mission enrollment unsuccessful');
				$timeout( function(){
					/*Reset Output node*/
					firebase.database().ref('/User/'+ UserID +'/Output/EnrollMission').set('0,'+ Date.now());
				},3000);
			} else {
				$scope.enrollMissionMessage = 'ready';
				$scope.$apply();
			}
		});
	});
	// ---------------------------------------------------------------------------------

})

.controller('ListCtrl', function($scope, $interval, $stateParams) {
	$scope.SelectedCity = $stateParams.CityID;
	$scope.SelectedMission = $stateParams.MissionID;

	var startTime;
	firebase.auth().onAuthStateChanged(function (user) {
		var UserID = firebase.auth().currentUser.uid;

		//Get mission start time		
		firebase.database().ref('/User/'+ UserID +'/Record/' + $scope.SelectedCity + '/Mission/' + $scope.SelectedMission + '/StartTimeStamp/').once('value', function(snapshot) {
			startTime = snapshot.val();
			console.log('startTime: ',startTime);
		});

		//Get mission Duration
		firebase.database().ref('/User/'+ UserID +'/Record/' + $scope.SelectedCity + '/Mission/' + $scope.SelectedMission + '/Duration/').once('value', function(snapshot) {
			var duration = snapshot.val();
			console.log ('duration: ', duration);
			if (duration !== null) {
				// Time calculations for days, hours, minutes and seconds
				$scope.durationDays = Math.floor(duration / (60 * 60 * 24));
				$scope.durationHours = Math.floor((duration % (60 * 60 * 24)) / (60 * 60));
				$scope.durationMinutes = Math.floor((duration % (60 * 60)) / 60);
				$scope.durationSeconds = duration % 60;
			}
		});
	});

	//Running clock
	var tick = function () {
		var clock = Date.now();
		var timer = (clock - startTime);
		// Time calculations for days, hours, minutes and seconds
		$scope.timerDays = Math.floor(timer / (60 * 60 * 24 * 1000));
		$scope.timerHours = Math.floor((timer % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000));
		$scope.timerMinutes = Math.floor((timer % (60 * 60 * 1000)) / (60 * 1000));
		$scope.timerSeconds = Math.floor((timer % (60 * 1000))/1000);
	};
	tick();
	$interval(tick, 1000);

});


