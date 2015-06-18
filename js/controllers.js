'use strict';
/* global $, trelloHack, errorDisplay */

/* TERMS CONTROLLER */
trelloHack.controller('cardsController', ['Cards', '$rootScope', '$scope', '$http', function(Cards, $rootScope, $scope, $http) {

  var boardsUrl = 'https://api.trello.com/1/boards/54f8c5cf2f99d88f775a7689/lists?cards=open&card_fields=name,desc,due,email,labels,url,idMembers,pos&fields=name,idBoard&key=' + $rootScope.key + '&token=' + $rootScope.token ;

  Cards.getCards(boardsUrl).then(function(result) {
    if (result.data.errors) {
      //source error: do something
    } else {
      if (result.errors) {
        //angular error: do something
      } else {
        $scope.lists = result.data;
      }
    }
  });
}]);