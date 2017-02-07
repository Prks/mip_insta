angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.instagram', {
    url: '/page1',
    views: {
      'tab1': {
        templateUrl: 'templates/instagram.html',
        controller: 'instagramCtrl'
      }
    }
  })

  .state('tabsController.search', {
    url: '/page2',
    views: {
      'tab2': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController.post', {
    url: '/page3',
    views: {
      'tab3': {
        templateUrl: 'templates/post.html',
        controller: 'postCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.mikko_', {
    url: '/page4',
    views: {
      'tab4': {
        templateUrl: 'templates/mikko_.html',
        controller: 'mikko_Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page1')

  

});