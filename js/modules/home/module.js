/**
 * Attach home controllers to this module
 * we inject angular which is defined in main.js and aliased by requirejs
 * we declare an anonymous function which contains a ref (ng) to our app
 * then we create a new module, name it (app.home), declare it's deps ['app.constants','ui.router'], and attach it to the app (ng)
 **/
define(['angular'], function (ng) {
  'use strict';

  return ng.module('app.home', [
    'app.constants',
    'ui.router'
  ]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('root.home', {
        url: '/',
        views: {
          'state@': {
            templateUrl: '/js/modules/home/home.html',
            controller: 'HomeController'
        }
      }
    });
  }]);

});
