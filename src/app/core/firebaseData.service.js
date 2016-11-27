(function() {
  'use strict';
  
  angular
    .module('app.core')
    .factory('firebaseDataService', firebaseDataService);
  
  function firebaseDataService() {
    var root = firebase.database().ref();
    var service = {
      root: root,
      textMessages: root.child('textMessages')
    };
    
    return service;
  }
})();