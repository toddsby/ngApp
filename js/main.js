/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

  // set cache beater
  urlArgs: 'bust=v0.0.2',

  // setup requirejs aliases for base scripts
  paths: {
    'angular'       : '../lib/angular/angular.min',
    'async'         : '../lib/requirejs/async',
    'domReady'      : '../lib/requirejs/domReady',
    'ngSanitize'    : '../lib/angular/angular-sanitize.min',
    'ui.router'     : '../lib/angular/angular-ui-router.min',
    'lodash'        : '../lib/lodash/lodash-compat.min'
  },

  // prepare lodash and angular for use with requirejs
  shim: {
      'lodash'  : 
    {
      'exports' : '_'
    },
      'angular' : 
    {
      'exports' : 'angular'
    },
      'ngSanitize': ['angular'],
      'ui.router' : ['angular']
  },

   deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]

});