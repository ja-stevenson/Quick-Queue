(function() {
  'use strict';
  
  angular
    .module('app.auth')
    .factory('authService', authService);
  
  authService.$inject = ['$firebaseAuth', 'firebaseDataService'];
  
  function authService($firebaseAuth, firebaseDataService) {
    var firebaseAuthObject = $firebaseAuth();
    
    var service = {
      firebaseAuthObject: firebaseAuthObject,
      register: register,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      sendWelcomeEmail: sendWelcomeEmail
    };
    
    return service;
    
    ///////////////
    
    function register(user) {
      return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
    }
    
    function login(user) {
      return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
    }
    
    function logout() {
      firebaseAuthObject.$signOut();
    }
    
    function isLoggedIn() {
      return firebaseAuthObject.$getAuth();
    }
    
    function sendWelcomeEmail(emailAddress) {
      firebaseDataService.emails.push({
        emailAddress: emailAddress
      })
    }
  }
})();