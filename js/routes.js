/**
 * define default routes
 * attach to inital module (['./app'])
 * setup inital states, and reslove api data before loading state
 * inject $state and $stateParams on the $rootScope for convienent access later
 */
define(['./app'], function (app) {
    'use strict';
    return app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
    $stateProvider
    .state('root', {
      url:'',
      abstract: true,
      views: {
        'menu': {
          templateUrl: '/js/modules/menu/menu.html',
          // resolve menu items promise before loading state
          resolve: {
            items: ['MenuService', function (MenuService) {
                return MenuService.get();
            }]
          },
          controller: 'MenuController'
        },
        'footer': {
          templateUrl: '/js/modules/footer/footer.html'
        }
      }
    });
    $urlRouterProvider.otherwise('/');
    }])
    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }]);
});
