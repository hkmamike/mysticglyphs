angular.module('starter.controllers', [])


.controller('TempCtrl', function($scope, FirebaseUpload) {
	$scope.updateDatabase=function(){
		FirebaseUpload.updateDatabase();
	};
})

.controller('AppCtrl', function($scope, $http, $locale, $timeout, $rootScope, $state, $stateParams, $firebaseObject, $ionicScrollDelegate, $ionicSlideBoxDelegate, $ionicModal, $ionicSideMenuDelegate) {

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
			console.log('localStorage didTutorial = true, Skip intro');
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
		firebase.auth().signInWithRedirect(provider);
	};
	$scope.signOut = function () {
		firebase.auth().signOut();
		window.localStorage['hideLogin'] = false;
		$rootScope.userSignedIn = false;
		$rootScope.hideLogin = false;
	};

  // Check if the user is logging in
	if(window.localStorage['hideLogin'] === "true") {
			console.log('localStroage hideLogin = true, hiding Login');
			$rootScope.hideLogin = true;
		}

	$scope.loadingLogin = function () {
		window.localStorage['hideLogin'] = true;
	};

	firebase.auth().getRedirectResult().then(function(result) {
		userData.setUser(firebase.auth().currentUser);
	}).catch(function(error) {
	});
	// ---------------------------------------------------------------------------------

	// USER ACTION----------------------------------------------------------------------
	$scope.claimToken = function(TokenID, TokenPW) {
		console.log('Claim this token: ', TokenID, TokenPW);
		console.log('UserID: ', UserID);
		var TokenPWClean = TokenPW.toLowerCase().replace(/\s+/g,'');
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/ClaimToken/').set(TokenID + ',' + TokenPWClean + '@' + Date.now());
	};
	$scope.enrollMission = function(MissionID) {
		console.log('Enroll Mission: ', MissionID);
		$scope.enrollMissionMessage = 'requestingServer';
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/EnrollMission/').set(MissionID);
	};
	$scope.startTimer = function (SelectedMission) {
		console.log ('Timer for Mission ', SelectedMission, ' starts now at ', Date.now());
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/TimerStart/').set(SelectedMission + ', ' + Date.now());
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
  //For mission info section
	$scope.shownGroup = 0;
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	//For mission intro section
	// $scope.toggleInfo = function(info) {
	//	if ($scope.isInfoShown(info)) {
	//		$scope.shownInfo = null;
	//	} else {
	//			$scope.shownInfo = info;
	//	}
	// };
	// $scope.isInfoShown = function(info) {
	//		return $scope.shownInfo === info;
	// };
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

	// Payment MODAL----------------------------------------------------------------
	$ionicModal.fromTemplateUrl('templates/payment.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.paymentModal = modal;
	});
	$scope.openPayment = function(SelectedMission, SelectedCity) {
		$scope.paymentModal.show();
		$scope.SelectedMission = SelectedMission;
		$scope.SelectedCity = SelectedCity;
	};
	$scope.closePayment = function() {
		$scope.ResponseData = {closingWindow: 'discarding private data...'};
		$scope.FormData = {number: '', cvc: '', exp_year: '', exp_month: ''};
		$scope.submitAttempt = false;
		$timeout( function(){
			//Reset form
			$scope.ResponseData['closingWindow'] = null;
			$scope.paymentModal.hide();
			$scope.FormData = {};
		},1000);
	};
	$scope.submitAttemptFunction = function() {
		$scope.submitAttempt = true;
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
			var Result = Output.substring(0,Output.indexOf(","));
			if (Result==1) {
				$scope.enrollMissionMessage = 'processing';
				$scope.$apply();
				console.log('Checking mission availability');
			} else if (Result==2) {
				$scope.enrollMissionMessage = 'copyingMission';
				$scope.$apply();
				console.log('copying mission from database');
			} else if (Result==3) {
				$scope.enrollMissionMessage = 'unlocked';
				$scope.$apply();
				console.log('Mission enrollment has been completed');
				$timeout( function(){
					$scope.closePayment();
					/*Reset Output node*/
					firebase.database().ref('/User/'+ UserID +'/Output/EnrollMission').set('0,'+ Date.now());
				},3000);
			} else if (Result==4) {
				$scope.enrollMissionMessage = 'unsuccessful';
				$scope.$apply();
				console.log('Mission enrollment unsuccessful');
			} else {
				$scope.enrollMissionMessage = 'ready';
				$scope.$apply();
			}
		});
	});
	// ---------------------------------------------------------------------------------

	//Payment --------------------------------------------------------------------------
  $http.defaults.headers.common['X-Mashape-Key']  = NOODLIO_PAY_API_KEY;
  $http.defaults.headers.common['Content-Type']   = 'application/x-www-form-urlencoded';
  $http.defaults.headers.common['Accept']         = 'application/json';
  $scope.FormData = {test: TEST_MODE,};
  $scope.createToken = function(SelectedMission, FormData) {
    // init for the DOM
    $scope.ResponseData = {loading: true};
    console.log ('sending token creation request');
    // create a token and validate the credit card details
    $http.post(NOODLIO_PAY_API_URL + "/tokens/create", FormData).success(
      function(response){
        if(response.hasOwnProperty('id')) {
					$scope.txnStatus = 'tokenCreated';
					var token = response.id;
          $scope.ResponseData['token'] = token;
          console.log('token created, proceeding to charge.');
          proceedCharge(SelectedMission, token);
        } else {
          console.log ('token creation failed.');
					$scope.txnStatus = 'Error at token creation response';
          $scope.ResponseData['responseMessage'] = response.message;
          $scope.ResponseData['loading'] = false;
          $scope.ResponseData['tokenCreationFailed'] = true;
					console.log('Response is :', response);
					$timeout( function(){
						$scope.ResponseData['tokenCreationFailed'] = false;
					},3000);
        }
      }
    ).error(
				function(response){
					$scope.txnStatus = 'Error2';
					$scope.ResponseData['error'] = 'Unknown error occured, please contact developer';
					$scope.ResponseData['loading'] = false;
				}
			);
  };
  //Payment Continued - proceedCharge is to be moved to server side
  function proceedCharge (SelectedMission, token) {
    var param = {
      source: token,
      amount: 8000,
      currency: "hkd",
      description: "mission enrollment",
      stripe_account: STRIPE_ACCOUNT_ID,
      test: TEST_MODE,
    };
    $http.post(NOODLIO_PAY_API_URL + "/charge/token", param).success(
      function(response){
        $scope.ResponseData['loading'] = false;
        if(response.hasOwnProperty('id')) {
					console.log('stripe charge is successful.', response);
					$scope.txnStatus = 'txnRegistered';
          var paymentID = response.id;

          var transactionRecord = {};
          transactionRecord['/User/' + UserID + '/Transactions/' + paymentID + '/Type/'] = response.object;
          transactionRecord['/User/' + UserID + '/Transactions/' + paymentID + '/Amount/'] = response.amount;
          transactionRecord['/User/' + UserID + '/Transactions/' + paymentID + '/Mission/'] = SelectedMission;
          firebase.database().ref().update(transactionRecord);

          var transactionRecordAll = {};
          transactionRecordAll[paymentID + '/Type/'] = response.object;
          transactionRecordAll[paymentID + '/Amount/'] = response.amount;
          transactionRecordAll[paymentID + '/Mission/'] = SelectedMission;
          transactionRecordAll[paymentID + '/User/'] = UserID;
          firebase.database().ref().update(transactionRecordAll);

          $scope.enrollMission(SelectedMission);
					$timeout( function(){
						$scope.txnStatus = '';
					},3000);
        } else {
          console.log ('stripe charge failed.');
					$scope.txnStatus = 'Error at token charge response';
          $scope.ResponseData['responseMessage'] = response.message;
          $scope.ResponseData['loading'] = false;
          $scope.ResponseData['chargeFailed'] = true;
					console.log('Response is :', response);
					$timeout( function(){
						$scope.ResponseData['chargeFailed'] = false;
					},3000);
        }
      }
    ).error(
				function(response){
					console.log(response);
					$scope.ResponseData['paymentID'] = 'Error 4, see console';
					$scope.ResponseData['loading'] = false;
					$scope.txnStatus = 'Error4';
				}
			);
  }
  //Payment UI
	$scope.currentYear = new Date().getFullYear();
	$scope.currentMonth = new Date().getMonth() + 1;
	$scope.months = $locale.DATETIME_FORMATS.MONTH;
	$scope.FormData.type = undefined;
  // ---------------------------------------------------------
	$scope.savePaymentForm = function(validity, SelectedMission, FormData){
		if (validity){
			console.log('PaymentForm data is valid, creating payment token');
			$scope.createToken(SelectedMission, FormData);
		} else {
			console.log('PaymentForm data is invalid');
		}
	};

	// ---------------------------------------------------------
})

.controller('ListCtrl', function($scope, $interval, $stateParams) {
	$scope.SelectedCity = $stateParams.CityID;
	$scope.SelectedMission = $stateParams.MissionID;

	var startTime;
	firebase.auth().onAuthStateChanged(function (user) {
		var UserID = firebase.auth().currentUser.uid;

		//Get mission start time		
		firebase.database().ref('/User/'+ UserID +'/Record/' + $scope.SelectedCity + '/Mission/' + $scope.SelectedMission + '/StartTimeStamp/').on('value', function(snapshot) {
			startTime = snapshot.val();
			console.log('startTime: ',startTime);
		});

		//Get mission Duration
		firebase.database().ref('/User/'+ UserID +'/Record/' + $scope.SelectedCity + '/Mission/' + $scope.SelectedMission + '/Duration/').on('value', function(snapshot) {
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

angular.module('starter').directive('creditCardType', function(){
  var directive = { require: 'ngModel', link: function(scope, elm, attrs, ctrl){
        ctrl.$parsers.unshift(function(value){
          scope.FormData.type =
            (/^5[1-5]/.test(value)) ? "mastercard"
            : (/^4/.test(value)) ? "visa"
            : (/^3[47]/.test(value)) ? 'amex'
            : (/^6011|65|64[4-9]|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))/.test(value)) ? 'discover'
            : undefined;
          ctrl.$setValidity('invalid', !!scope.FormData.type);
          return value;
        });
      }
    };
  return directive;
});

// Currently not used
// angular.module('starter').directive('cardExpiration', function(){
//   var directive = { require: 'ngModel', link: function(scope, elm, attrs, ctrl){
//         scope.$watch('[FormData.exp_month,FormData.exp_year]',function(value){
//           ctrl.$setValidity('invalid',true);
//           if ( scope.FormData.exp_year == scope.currentYear && scope.FormData.exp_month <= scope.currentMonth) {
//             ctrl.$setValidity('invalid',false);
//           }
//           return value;
//         },true);
//       }
//     };
//   return directive;
// });

// Currently not used
// angular.module('starter').filter( 'range', function() {
//       var filter = function(arr, lower, upper) {
//							for (var i = lower; i <= upper; i++) arr.push(i);
//							return arr;
//						};
//       return filter;
// });
