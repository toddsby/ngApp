/**
 * defines item directive for menu module
 * attach to common module in define (['./module'])
 */
define(['./module'], function (ng) {
  'use strict';

 	ng.directive('menuItem', function () {
		return {
		/**
		 * Restrict to the following element
		 * A - attribute, E - element, C - class, M - comment
		 * Can combine ie AEC would look for attribute, element, and class
		 */
	  	restrict : 'A',
	  	replace : true,
	  	templateUrl : '/js/modules/menu/item.html',
	  	// create isolated scope with the following (=attr) example <div bind-to-this="thing"></div> =bind-to-this
	  	scope: {
	  		id : '=id',
	  		name : '=name',
	  		url : '=url'
	  	},
	  	//TODO: define directive controller.
	  	link : function(scope, element, attrs) {
	    },
	  }
	});
});
