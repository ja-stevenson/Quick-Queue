(function() {
  'use strict';
  
  angular
    .module('app.auth')
    .controller('AuthController', AuthController);
  
  AuthController.$inject = ['$location', 'authService'];
  
  function AuthController($location, authService) {
    var vm = this;
    
    vm.user = {
      email: '',
      password: ''
    }
    
    vm.register = register;
    vm.login = login;
    
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
  }
   
})();