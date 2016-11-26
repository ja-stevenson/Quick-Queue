(function() {
  'use strict';
  
  angular
    .module('app.auth')
    .controller('AuthController', AuthController);
  
  AuthController.$inject = ['$location','$firebaseAuth'];
  
  function AuthController($location, $firebaseAuth) {
    var vm = this;
    var firebaseAuthObject = $firebaseAuth();
    
    vm.user = {
      email: '',
      password: ''
    }
    
    vm.register = register;
    vm.login = login;
    vm.logout = logout;
    
    function register(user) {
      return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password)
        .then(function() {
          vm.login(user);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    
    function login(user) {
      return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password)
        .then(function(user) {
          console.log(user);
          $location.path('/waitlist');
        })
        .catch(function(error) {
          console.log(error);
        })
    }
    
    function logout() {
      firebaseAuthObject.$signOut();
      $location.path('/');
    }
  }
   
})();