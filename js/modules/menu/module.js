/**
 * Attach menu services and controllers to this module
 * we inject angular which is defined in main.js and aliased by requirejs
 * we declare an anonymous function which contains a ref (ng) to our app
 * then we create a new module, name it (app.menu), declare it's deps ['app.constants'], and attach it to the app (ng)
 **/
define(['angular'], function (ng) {
  'use strict';

  return ng.module('app.menu', [
    'app.constants'
  ]);
});