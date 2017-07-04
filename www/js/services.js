angular.module('starter.services', [])

.factory('userData', function($q, $firebaseObject, $firebaseArray) {

  var user = {};
  var uid;
  firebase.auth().onAuthStateChanged(function () {
    user = firebase.auth().currentUser;
    uid = firebase.auth().currentUser.uid;
    console.log('position 2', Date.now(), uid);
    console.log('Current User: ', user);
    console.log('Current User uid: ', uid);
  });

  return {
    
    getUser: function () {
        // console.log('getUser ', firebase.auth().currentUser);
        return firebase.auth().currentUser;
    },
    
    setUser: function (userparameter) {
        user = userparameter;
    },

    dataPath: function(path) {
      //var uid = firebase.auth().currentUser.uid;
      console.log('/users/' + uid +'/'+ path);
      return $firebaseObject(firebase.database().ref('/users/' + uid +'/'+ path));
    },

    // userFavourite: function() {
    //   var uid=firebase.auth().currentUser.uid;
    //   console.log($firebaseobject(firebase.database().ref('/users/')));
    //   // return $firebaseObject(firebase.database().ref('/users/' + uid +'/'+ path));
    // },

    createUser: function() {
      var foodieInformation = {
        foodieName: userData.getUser().displayName,
        foodieID: userData.getUser().uid,
        foodieScore: 100,
        foodieEmail: userData.getUser().email,
        foodieImg: userData.getUser().photoURL
      };

      console.log('foodieInfo', foodieInformation);
      var updates = {};
      updates['/users/' + uid + '/info/'] = foodieInformation;
      return firebase.database().ref().update(updates);

      // return foodies;
      // return foodieInfo;
    },

  };
})

.factory('tokens',['$rootScope', '$q','userData', '$firebaseObject', '$firebaseArray', function( $rootScope, $q, userData, $firebaseObject, $firebaseArray) {
  var self = this;
  var firebaseRef = firebase.database();
  var ref = firebase.database().ref().child('tokens');
  var articles = $firebaseObject(ref);

  return {

    getTokenLocation: function(token) {
      tokenLocation = $firebaseObject(ref.child(token).child('location'));
      return tokenLocation;
    },

    getTokenMessage: function(token) {
      tokenMessage = $firebaseObject(ref.child(token).child('message'));
      return tokenMessage;
    },

    getTokenPrize: function(token) {
      tokenPrize = $firebaseObject(ref.child(token).child('prize'));
      return tokenPrize;
    },

    claimToken: function(token) {
      var currentUserInfo = userData.getUser();
      var uid = currentUserInfo.uid;

      return firebase.database().ref('/tokens/' + token + '/missionCode/').once('value').then(function(snapshot) {
       
        //this checks the token against the valid token list automatically because a null result does not trigger 'then'
        var tokenToClaim = snapshot.val();
        var updates = {};

        console.log('claiming this token : ', tokenToClaim);
        updates['/users/' + uid + '/tokenClaimed/' + token] = tokenToClaim;
        firebase.database().ref().update(updates);
      });
    },

  };
}])
