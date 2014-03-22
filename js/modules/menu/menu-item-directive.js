/**
 * defines item directive for menu module
 * attach to common module in define (['./module'])
 */
define(['./module'], function (ng) {
  'use strict';

 	ng.directive('menuItem', function () {
		return {
	  	restrict : 'A',
	  	replace : true,
	  	templateUrl : '/js/modules/menu/item.html',
	  	transclude: true,
	  	//TODO: define directive controller.
	  	link : function(scope, element, attrs) {
	    },
	  }
	});
});
