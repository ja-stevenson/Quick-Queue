(function() {
  'use strict';
  
  angular
    .module('app.auth')
    .factory('authService', authService);
  
  authService.$inject = ['$firebaseAuth', 'firebaseDataService'];
  
  function authService($firebaseAuth, firebaseDataService) {
    var firebaseAuthObject = $firebaseAuth();
    
    var service = {
      register: register
    };
    
    return service;
    
    ///////////////
    
    function register(user) {
      return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
    }
    
  }
})();