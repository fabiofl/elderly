(function(){
  'use strict';
  
  angular.module('elderly', [
  	'firebase',
  	'ngMaterial',
    'elderly.routes',
    'elderly.home',
    'elderly.diary',
    'elderly.event'
  ]);
})();