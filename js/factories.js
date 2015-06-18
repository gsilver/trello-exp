'use strict';
/* global  trelloHack, errorDisplay*/

//CARDS FACTORY - does the request for the CARDS controller
trelloHack.factory('Cards', function ($http) {
  return {
    getCards: function (url) {
      return $http.get(url, {cache: false}).then(
        function success(result) {
          //forward the data - let the controller deal with it
          return result;
        },
        function error(result) {
          errorDisplay(url, result.status, 'Unable to get Cards');
        }
      );
    }
  };
});

