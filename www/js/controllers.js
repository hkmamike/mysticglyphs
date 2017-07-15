angular.module('starter.controllers', [])


.controller('TempCtrl', function($scope, FirebaseUpload) {
	$scope.updateDatabase=function(){
		FirebaseUpload.updateDatabase();
	};
})

.controller('AppCtrl', function($scope, $rootScope, $state, $stateParams, $firebaseObject, $ionicSlideBoxDelegate, $ionicModal, $ionicSideMenuDelegate) {

// INTRO------------------------------------------------------------------------
	//	For splash screen
	//	setTimeout(function () {
	//		navigator.splashscreen.hide();
	//	}, 750);

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
		//	If there is a splash screen
		//	else{
		//	setTimeout(function () {
		//		navigator.splashscreen.hide();
		//		}, 750); 
		//	};

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
		$rootScope.userSignedIn = false;
		$rootScope.userSignedOut = true;
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
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/ClaimToken/').set(TokenID + ',' + TokenPW);
	};

	$scope.EnrollCampaign = function(CampaignID) {
		console.log(CampaignID);
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/EnrollCampaign/').set(CampaignID);
	};

	$scope.nextMission = function(MissionID, SelectedCity, SelectedCampaign) {
		console.log('complete mission check: ', MissionID);
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/MissionComplete/').set(MissionID);
		$state.go('^.Campaign',{CityID: SelectedCity, CampaignID: SelectedCampaign});
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

// ---------------------------------------------------------------------------------

// USER INFO------------------------------------------------------------------------

	$rootScope.userSignedIn = false;

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
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/ClaimToken/').set('warm up');
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/EnrollCampaign/').set('warm up');
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/MissionComplete/').set('warm up');

	});
// ---------------------------------------------------------------------------------

	$scope.CampaignList = $firebaseObject(firebase.database().ref('/DatabaseInfo/' + '/CityCampaignInfo/'));

})


.controller('ListCtrl', function($scope, $timeout, $stateParams, $ionicModal) {
	$scope.SelectedCity = $stateParams.CityID;
	$scope.SelectedCampaign = $stateParams.CampaignID;
	$scope.SelectedMission = $stateParams.MissionID;

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
	$scope.openTokenClaim = function(TokenNumber) {
		$scope.TokenClaim.code = '';
		$scope.TokenClaim.show();
		$scope.TokenNumber = TokenNumber;
	};

	$scope.glyphCodeSubmitMessage = false;
	$scope.codeSubmitMessage = function() {
		$scope.glyphCodeSubmitMessage = true;
		$timeout( function(){
			$scope.glyphCodeSubmitMessage = false;
			$scope.closeTokenClaim();
		},3000);
	};
	// ---------------------------------------------------------------------------------

	// SEE TOKEN HINTS MODAL----------------------------------------------------------------
	$scope.TokenHintsData = {};
	$ionicModal.fromTemplateUrl('templates/tokenHints.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.Hints = modal;
	});
	$scope.closeHints = function() {
		$scope.Hints.hide();
	};
	$scope.openHints = function(TokenNumber) {
		$scope.Hints.show();
		$scope.TokenNumber = TokenNumber;
	};
	// ---------------------------------------------------------------------------------

});


