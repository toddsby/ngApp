/**
 * initialize angular app for use with requirejs
 * loads sub modules and wraps them up into the main module
 * top-level module definitions (main.js, top level includes of modules folder)
 * all module names ie app.common, app.constants, app.home
 */
define([
  'angular',
  'ui.router',
  'lodash',
  './constants',
  './modules/common/index',
  './modules/home/index',
  './modules/menu/index'
], function (ng) {
  'use strict';

  return ng.module('app', [
    'app.common',
    'app.constants',
    'app.menu',
    'app.home',
    'ui.router'
  ]);

});
