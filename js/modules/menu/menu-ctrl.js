/**
 * Menu controller definition
* attach to common module in define (['./module'])
 */
define(['./module'], function (ng) {
  'use strict';
// retrieve resolved menu items and inject into controller, then save add to scope
ng.controller('MenuController', ['$rootScope','$scope', 'items', function ($rootScope, $scope, items) {
    $scope.items = items;
    // lodash pluck url from collection and create new array of urls, then store to $rootScope for sharing across states
    $rootScope.urls = _.pluck(items, 'url');
    // log array to console for verification
    console.log($scope.urls);
  }]);
});