/**
 * Retrives Menu items from API
 * define MenuService factory
 * attach to common module in define (['./module'])
 * setup deps ['RESTService', 'CONFIG']
 */
define(['./module'], function (ng) {
  'use strict';
  	// ['RESTService', function (RESTService)] redundant but needed to properly minify. :/
	ng.factory('MenuService', ['RESTService','CONFIG', function (RESTService, CONFIG) {
		
		return {
			/**
			* Get JSON from API via RESTService Factory
			* @return {promise} resolves to JSON array of menu items.
			*/
			get : function () {

				var data = RESTService.get(CONFIG.ITEMS_URL);
				
				return data;
			},
			/**
			* Store hardcoded JSON array in object for testing
			*/
			stuff : function () {
				var stuff = {};
				return stuff.items = [
				{
					"id" : "item_1",
					"name" : "item 1",
					"url" : "http://someplace.com"
				},
				{
					"id" : "item_2",
					"name" : "item 2",
					"url" : "http://anotherplace.com"	
				},
				{
					"id" : "item_3",
					"name" : "item 3",
					"url" : "http://threeanotherplace.com"	
				},
				{
					"id" : "item_4",
					"name" : "item 4",
					"url" : "http://fouranotherplace.com"	
				},
				{
					"id" : "item_5",
					"name" : "item 5",
					"url" : "http://fiveanotherplace.com"	
				},
				{
					"id" : "item_6",
					"name" : "item 6",
					"url" : "http://sixanotherplace.com"	
				}
				]; 
			}
		}

	}]);
});