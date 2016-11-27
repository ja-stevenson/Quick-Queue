(function() {
  'use strict';
  
  angular
    .module('app.auth')
    .controller('AuthController', AuthController);
  
  AuthController.$inject = ['$location', '$firebaseAuth', 'authService'];
  
  function AuthController($location, $firebaseAuth, authService) {
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
      return authService.register(user)
        .then(function() {
          vm.login(user);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    
    function login(user) {
      return authService.login(user)
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