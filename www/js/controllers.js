angular.module('starter.controllers', [])


.controller('TempCtrl', function($scope, FirebaseUpload) {
	$scope.updateDatabase=function(){
		FirebaseUpload.updateDatabase();
	};
})

.controller('IntroCtrl', function($scope, $rootScope, $ionicSlideBoxDelegate, $state) {

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		$ionicSlideBoxDelegate.slide(0);
	});

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

  // Move to the next slide
  $scope.next = function() {
    $scope.$broadcast('slideBox.nextSlide');

  };

 })

.controller('AppCtrl', function($scope, $state, $firebaseObject, $ionicModal, $ionicSideMenuDelegate) {

// INTRO------------------------------------------------------------------------
	//	For splash screen
	//	setTimeout(function () {
	//		navigator.splashscreen.hide();
	//	}, 750);

  $scope.toIntro = function(){
    window.localStorage['didTutorial'] = "false";
    $state.go('intro');
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

	firebase.auth().getRedirectResult().then(function(result) {
		userData.setUser(auth.currentUser);
	}).catch(function(error) {
	});
// ---------------------------------------------------------------------------------

// USER INFO------------------------------------------------------------------------
	firebase.auth().onAuthStateChanged(function () {
		var FirebaseUser = firebase.auth().currentUser;
		$scope.UserInfo = $firebaseObject(firebase.database().ref('/User/' + FirebaseUser.uid + '/UserInfo/'));
		$scope.UserRecord = $firebaseObject(firebase.database().ref('/User/' + FirebaseUser.uid + '/Record/'));
		$scope.UserUnlockedToken = $firebaseObject(firebase.database().ref('/User/' + FirebaseUser.uid + '/Unlocked/Token/'));
		UserID = FirebaseUser.uid;

	});
// ---------------------------------------------------------------------------------


// USER ACTION----------------------------------------------------------------------

	$scope.EnrollCampaign= function(CampaignID) {
		console.log(CampaignID);
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/EnrollCampaign/').set(CampaignID);
	};

	$scope.claimToken= function(TokenID, TokenPW) {
		console.log('Claim this token: ', TokenID, TokenPW);
		console.log('UserID: ', UserID);
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/ClaimToken/').set(TokenID + ',' + TokenPW);
	};

	$scope.nextMission= function(MissionID) {
		console.log('complete mission check: ', MissionID);
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/MissionComplete/').set(MissionID);
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

	$scope.CampaignList = $firebaseObject(firebase.database().ref('/DatabaseInfo/' + '/CityCampaignInfo/'));

})


.controller('ListCtrl', function($scope, $stateParams, $ionicModal) {
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


