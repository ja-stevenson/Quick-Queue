(function() {
  'use strict';
  
  angular
    .module('app.auth')
    .controller('AuthController', AuthController);
  
  AuthController.$inject = ['$firebaseAuth'];
  
  function AuthController($firebaseAuth) {
    var vm = this;
    var firebaseAuthObject = $firebaseAuth();
    
    vm.user = {
      email: '',
      password: ''
    }
    
    vm.register = register;
    vm.login = login;
    
    function register(user) {
      return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password)
        .then(function(user) {
          console.log(user);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    
    function login(user) {
      return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password)
        .then(function(user) {
          console.log(user);
        })
        .catch(function(error) {
          console.log(error);
        })
    }
  }
   
})();