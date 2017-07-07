// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'chart.js', 'starter.controllers', 'starter.services', 'starter.DatabaseUploader', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
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

  //Intro Page
  .state('intro', {
    url: '/intro',
    templateUrl: 'templates/intro.html',
    controller: 'IntroCtrl'
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
        templateUrl: 'templates/List.html',
      }
    }
  })

  //Campaign List in City
  .state('app.City', {
    url: '/List/City/:CityID',
    views: {
      'menuContent': {
        templateUrl: 'templates/City.html',
        controller: 'ListCtrl'
      }
    }
  })

  //Mission List in Campaign
  .state('app.Campaign', {
    url: '/List/City/:CityID/Campaign/:CampaignID',
    views: {
      'menuContent': {
        templateUrl: 'templates/Campaign.html',
        controller: 'ListCtrl'
      }
    }
  })

  //Mission Info
  .state('app.MissionInfo', {
    url: '/List/City/:CityID/Campaign/:CampaignID/MissionInfo/:MissionID',
    views: {
      'menuContent': {
        templateUrl: 'templates/MissionInfo.html',
        controller: 'ListCtrl'
      }
    }
  })

  //Mission Details
  .state('app.Mission', {
    url: '/List/City/:CityID/Campaign/:CampaignID/Mission/:MissionID',
    views: {
      'menuContent': {
        templateUrl: 'templates/Mission.html',
        controller: 'ListCtrl'
      }
    }
  })

  .state('app.completedMissions', {
    url: '/completedMissions',
    views: {
      'menuContent': {
        templateUrl: 'templates/completedMissions.html',
      }
    }
  })

  .state('app.missionDetails', {
    url: '/missionDetails/:missionID',
    views: {
      'menuContent': {
        templateUrl: 'templates/missionDetails.html',
        // controller: 'missionDetailsCtrl'
      }
    }
  })


  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/intro');
});
