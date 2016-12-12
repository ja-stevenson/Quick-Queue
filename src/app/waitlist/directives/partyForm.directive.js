(function() {
  'use strict'
  
  angular
    .module('app,waitlist')
    .directive('jsPartyForm', jsPartyForm)
  
  function jsPartyForm() {
    return {
      templateUrl: 'app/waitlist/directives/partyForm.html',
      restrict: 'E'
    }
  }
})()