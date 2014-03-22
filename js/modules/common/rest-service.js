/**
 * defines RESTService utilizing $q and $http for api access
 * attach to common module in define (['./module'])
 */
define(['./module'], function (ng) {
  'use strict';
  	return ng.factory('RESTService',['$q','$http', function ($q, $http) {
		return {
			get: function(url,config) {
				var deferred = $q.defer();
				$http.get(url,config)
					.success(function (data, status, headers, config) {
				   		deferred.resolve(data);
					})
					.error(function (data, status, headers, config) {				  
				    	console.error(data, status, headers, config);
				    	deferred.reject(data);
				  	});
				return deferred.promise;
			},
			post: function(url,data,config) {
				var deferred = $q.defer();
				$http.post(url,data,config)
					.success(function (data, status, headers, config) {
				   		deferred.resolve(data);
					})
					.error(function (data, status, headers, config) {				  
				    	console.error(data, status, headers, config);
				    	deferred.reject(data);
				  	});

				return deferred.promise;
			}
		}
	}]);
});
