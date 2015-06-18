'use strict';
/* global $,  angular */

var trelloHack = angular.module('trelloHack', []);

trelloHack.run(function($rootScope) {
  //for any init values needed
  var key = "";
  var token = "";


  // get token and key from a json file in the root dir:
  /*
 
  {
	"token":"trelloToken",
	"key":"trelloKey"
}
   */

  var waitFor = getAppInfoAjax();
  waitFor.done(function(data) {
    key = data.key;
    token = data.token;
  })
  $rootScope.key = key;
  $rootScope.token = token;
});