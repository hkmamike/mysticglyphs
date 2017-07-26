//Payment API variables
var NOODLIO_PAY_API_URL         = "https://noodlio-pay.p.mashape.com";
var NOODLIO_PAY_API_KEY         = "KWM88xJZ4fmshN1FqiBLznS8Vn0vp1Oc0CSjsnYuBNgnk5wUHa";
var STRIPE_ACCOUNT_ID           = "acct_1A9Z68HnE9ndDvpX";
// development mode (TEST_MODE: true) or production mode (TEST_MODE: false)
var TEST_MODE = true;

angular.module('starter', ['ionic', 'starter.controllers', 'starter.DatabaseUploader', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    } if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.run(['$rootScope', '$state', function($rootScope, $state){
  $rootScope.$on('$stateChangeStart',function(){
      $rootScope.stateIsLoading = true;
  });
  $rootScope.$on('$stateChangeSuccess',function(){
    $rootScope.stateIsLoading = false;
  });
}])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  //Update Database
  .state('updateDatabase', {
    url: '/updatedatabase',
    templateUrl: 'templates/updatedatabase.html',
    controller: 'TempCtrl'
  })
  //Intro Page
  .state('intro', {
    url: '/intro',
    templateUrl: 'templates/intro.html',
    controller: 'AppCtrl'
  })
  //App Abstract
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  //Cities List
  .state('app.List', {
    url: '/List',
    views: {
      'menuContent': {
        templateUrl: 'templates/List.html'
      }
    }
  })
  //Mission List in City
  .state('app.City', {
    url: '/List/City/:CityID',
    views: {
      'menuContent': {
        templateUrl: 'templates/City.html',
        controller: 'ListCtrl'
      }
    }
  })
  //Mission Info
  .state('app.MissionInfo', {
    url: '/List/City/:CityID/MissionInfo/:MissionID',
    views: {
      'menuContent': {
        templateUrl: 'templates/MissionInfo.html',
        controller: 'ListCtrl'
      }
    }
  })
  //Mission Page
  .state('app.Mission', {
    url: '/List/City/:CityID/Mission/:MissionID',
    views: {
      'menuContent': {
        templateUrl: 'templates/Mission.html',
        controller: 'ListCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/intro');
});
