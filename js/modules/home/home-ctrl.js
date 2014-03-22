/**
 * Home controller definition
* attach to common module in define (['./module'])
 */
define(['./module'], function (ng) {
  'use strict';

ng.controller('HomeController', ['$scope', function ($scope) {
    $scope.twoTimesTwo = 2 * 2;
  }]);
});
