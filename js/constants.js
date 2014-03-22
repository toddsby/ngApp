/**
 * defines constants for application
 * attach to inital module (['angular'])
 * add to CONFIG service for constants
 * VERSION : '0.0.8', APP_NAME : 'YoSweetApp'
 */
define(['angular'], function (ng) {
  'use strict';
  return ng.module('app.constants', [])
    .constant('CONFIG', {
    	ITEMS_URL : 'js/modules/menu/items.json',
    	VERSION : '0.0.5'
    });
});
