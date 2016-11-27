(function() {
  'use strict';
  
  angular
    .module('app.waitList')
    .controller('WaitListController', WaitListController);
  
  WaitListController.$inject = ['$firebaseArray', 'partyService'];
  
  function WaitListController($firebaseArray, partyService) {
    var vm = this;
    
    var fireParties = firebase.database().ref('parties');
    var fireTextMessages = firebase.database().ref('textMessages');
    
    vm.newParty = new partyService.Party();
    vm.parties = $firebaseArray(fireParties);
    vm.addParty = addParty;
    vm.removeParty = removeParty;
    vm.sendTextMessage = sendTextMessage;
    vm.toggleDone = toggleDone;
    
    function addParty() {
      vm.parties.$add(vm.newParty);
      vm.newParty = new partyService.Party();
    }
    
    function removeParty(party) {
      vm.parties.$remove(party);
    }
    
    function sendTextMessage(party) {
      var newTextMessage = {
        phoneNumber: party.phone,
        size: party.size,
        name: party.name
      };
      fireTextMessages.push(newTextMessage);
      party.notified = true;
      vm.parties.$save(party);
    }
    
    function toggleDone(party) {
      vm.parties.$save(party);
    }
    
  }
})();