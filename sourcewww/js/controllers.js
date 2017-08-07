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
	$scope.Leaderboard = $firebaseObject(firebase.database().ref('/Leaderboard/'));
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
		$state.go('app.List');
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

	// Image HINTS MODAL----------------------------------------------------------------
	$ionicModal.fromTemplateUrl('templates/mapPage.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.mapPage = modal;
	});
	$scope.closeMap = function() {
		$scope.mapPage.hide();
	};
	$scope.openMap = function() {
		$scope.mapPage.show();
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


		$scope.enrollMissionMessage = 'ready';
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
      amount: 4800,
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
          transactionRecordAll['/AllTransactions/' + paymentID + '/Type/'] = response.object;
          transactionRecordAll['/AllTransactions/' + paymentID + '/Amount/'] = response.amount;
          transactionRecordAll['/AllTransactions/' + paymentID + '/Mission/'] = SelectedMission;
          transactionRecordAll['/AllTransactions/' + paymentID + '/User/'] = UserID;
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
	// ------------------------------------------------------------------------------

})

.controller('ListCtrl', function($scope, $timeout, $ionicModal, $interval, $stateParams) {
	$scope.SelectedCity = $stateParams.CityID;
	$scope.SelectedMission = $stateParams.MissionID;

	firebase.auth().onAuthStateChanged(function (user) {
		var UserID = firebase.auth().currentUser.uid;

		//Get mission start time		
		firebase.database().ref('/User/'+ UserID +'/Record/' + $scope.SelectedCity + '/Mission/' + $scope.SelectedMission + '/StartTimeStamp/').on('value', function(snapshot) {
			$scope.startTime = snapshot.val();
		});

		//Get mission Duration
		firebase.database().ref('/User/'+ UserID +'/Record/' + $scope.SelectedCity + '/Mission/' + $scope.SelectedMission + '/Duration/').on('value', function(snapshot) {
			var duration = snapshot.val();
			if (duration !== null) {
				// Time calculations for days, hours, minutes and seconds
				// $scope.durationDays = Math.floor(duration / (60 * 60 * 24));
				// $scope.durationHours = Math.floor((duration % (60 * 60 * 24)) / (60 * 60));
				// $scope.durationMinutes = Math.floor((duration % (60 * 60)) / 60);
				// $scope.durationSeconds = duration % 60;

				// Time calculations for days, hours, minutes and seconds (H M S system)- simplified for performance
				$scope.durationHours = ("0" + Math.floor(duration/3600)).slice(-2);
				$scope.durationMinutes = ("0" + Math.floor((duration % 3600)/60)).slice(-2);
				$scope.durationSeconds = ("0" + Math.floor(duration % 60)).slice(-2);
			}
		});
	});

	// Image Leader Board MODAL---------------------------------------------------------
	$ionicModal.fromTemplateUrl('templates/leaderboard.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.leaderboard = modal;
	});
	$scope.closeLeaderboard = function() {
		$scope.leaderboard.hide();
	};
	$scope.openLeaderboard = function() {
		$scope.leaderboard.show();
	};
	// ---------------------------------------------------------------------------------

	// submitScore MODAL----------------------------------------------------------------
	$scope.Math = window.Math;
	$ionicModal.fromTemplateUrl('templates/submitScore.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.submitScore = modal;
	});
	$scope.closeSubmitScore = function() {
		$scope.submitScore.hide();
	};
	$scope.openSubmitScore = function() {
		$scope.submitScore.show();
	};
	$scope.scoreSubmitMessage = 'ready';
	$scope.scoreSubmitMessage = function() {
		$scope.scoreSubmitMessage = 'submitting';
	};
	// ---------------------------------------------------------------------------------
	$scope.submitScores = function(SelectedMission, groupName) {
		console.log('Score submittion from group: ', groupName, ', for mission ' , SelectedMission);
		console.log('UserID: ', UserID);
		firebase.database().ref('/User/'+ UserID +'/Input/' + '/SubmitScore/').set(SelectedMission + ',' + groupName + '@' + Date.now());
	};

	// CLOUD FUNCTION RESPONSES FOR GLYPH UNLOCK--------------------------------------------
	firebase.database().ref('/User/'+ UserID +'/Output/SubmitScore').on('value', function(snapshot) {
		var Output = snapshot.val();
		var Result = Output.substring(0,Output.indexOf(","));
		if (Result==1) {
			$scope.scoreSubmitMessage = 'success';
			$scope.$apply();
			console.log('Submit Score Successful');
			$timeout( function(){
				/*Reset Output node*/
				firebase.database().ref('/User/'+ UserID +'/Output/SubmitScore').set('2,'+ Date.now());
				$scope.closeSubmitScore();
			},3000);
		} else if (Result==0) {
			$scope.scoreSubmitMessage = 'unsuccessful';
			$scope.$apply();
			console.log('Submit Score Unsuccessful');
			$timeout( function(){
				/*Reset Output node*/
				firebase.database().ref('/User/'+ UserID +'/Output/SubmitScore').set('2,'+ Date.now());
			},3000);
		} else {
			$scope.scoreSubmitMessage = 'ready';
			$scope.$apply();
		}
	});

	//Running clock
	var tick = function () {
		var clock = Date.now();
		var timer = (clock - $scope.startTime);
		// Time calculations for days, hours, minutes and seconds (H M S system)- simplified for performance
		$scope.timerHours = ("0" + Math.floor(timer/3600000)).slice(-2);
		$scope.timerMinutes = ("0" + Math.floor((timer % 3600000)/60000)).slice(-2);
		$scope.timerSeconds = ("0" + Math.floor((timer % 60000)/1000)).slice(-2);
	};
	$interval(tick, 1000);

})

.controller('MapCtrl', function($scope, $rootScope, $timeout, $firebaseObject, $state, $stateParams) {
	$scope.SelectedCity = $stateParams.CityID;
	$scope.SelectedMission = $stateParams.MissionID;
	function makeMap (MissionCoords) {
		var latLng = new google.maps.LatLng(MissionCoords.centerLat, MissionCoords.centerLng);
		var markerlatLng = new google.maps.LatLng(MissionCoords.markerLat, MissionCoords.markerLng);
		var mapOptions = {
			center: latLng,
			zoom: parseInt(MissionCoords.zoom,10),
			mapTypeID: 'roadmap'
		};
		map = new google.maps.Map(document.getElementById("map"), mapOptions);
		var rawPolygonCoords = MissionCoords.polygonCoords;
		var split = rawPolygonCoords.split("-");
		var polygonCoords = [];
		for (var i = 0; i < split.length; i++) {
			var temp = split[i].split(",");
			var obj = {lat: parseFloat(temp[0]), lng: parseFloat(temp[1])};
			polygonCoords.push(obj);
		}
		var marker = new google.maps.Marker({
			position: markerlatLng,
			map: map,
			label: "*"
		});
		var polygon = new google.maps.Polygon({
      paths: polygonCoords,
      strokeColor: '#00B300',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#00B300',
      fillOpacity: 0.2
		});
		polygon.setMap(map);
		$rootScope.mapIsLoading = false;
		var infowindow = new google.maps.InfoWindow({
          content: '<strong>Recommended starting location</strong><br><p>Area shaded in green shows the mission boundary.</p>'
     });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
	}
	$scope.initMap = function () {
		var MissionCoords = $firebaseObject(firebase.database().ref('/DatabaseInfo/MissionInfo/' + $scope.SelectedCity + '/' + $scope.SelectedMission + '/Coordinates/'));
		MissionCoords.$loaded().then(function() {
			$rootScope.mapIsLoading = true;
			//timeout prevents loading bug
			$timeout( function(){
				makeMap(MissionCoords);
			},300);
			//	Use if current position is required
			//	navigator.geolocation.getCurrentPosition(function(position) {
			//		console.log ('B');
			//		foundLoc(position, MissionCoords);
			//	});
			//	function foundLoc (position, MissionCoords) {
			//		console.log ('C');
			//		makeMap(position, MissionCoords);
			//	}
		});
	};
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

angular.module('starter').filter('hourfilter', function() {
    return function(input) {
        return (("00" + Math.floor(input/3600)).slice(-2));
    };
});

angular.module('starter').filter('minutefilter', function() {
    return function(input) {
        return (("00" + Math.floor((input % 3600)/60)).slice(-2));
    };
});

angular.module('starter').filter('secondfilter', function() {
    return function(input) {
        return (("00" + Math.floor(input % 60)).slice(-2));
    };
});
