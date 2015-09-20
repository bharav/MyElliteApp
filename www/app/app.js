angular.module('eliteApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('home', {
    url: '/home',
    abstract:true,
    templateUrl: 'app/home/home.html'
  })
  .state('home.myteams', {
    url: '/myteams',
    views:{
      "tab-myteams":{
      templateUrl: 'app/home/myteams.html'
      }
    }
  })
 .state('home.leagues', {
    url: '/leagues',
    view:{
      "tab-leagues":{
        templateUrl: 'app/home/leagues.html'    
      }
    }
  })  
  .state('app.teams', {
    url: '/app/teams',
    templateUrl: 'app/teams/teams.html'
  })
  .state('app.teams-detail', {
    url: '/app/teams/:id',
    templateUrl: 'app/teams/teams-detail.html'
  })
  .state('app', {
    url: '/app',
    templateUrl: 'app/layout/menu-layout.html'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home/leagues');

});
