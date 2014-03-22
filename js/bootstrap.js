/**
 * bootstraps angular onto the window.document node
 * NOTE: index.html doesn't need the ng-app attribute when using ng.bootstrap
 * initial defines for requirejs (should include top-level js files)
 */
define([
  'require',
  'angular',
  'app',
  'routes'
], function (require, ng) {
  'use strict';

  /*
   * place operations that need to initialize prior to app start here
   * using the 'run' function on the top-level module
   */

  require(['domReady!'], function (document) {
    // everything is loaded...go!
    ng.bootstrap(document, ['app']);
  });
});
