import 'angular';
import 'angular-route';

const m = angular.module('support-legacy', ['ngRoute']);

m.component('people', {
  template: `
    AngularJS Page
    
    <div>
      <a href="/tickets">Tickets</a>
    </div>
  `
});
m.component('empty', {
  template: ``
});
m.component('ngViewCmp', {
  template: `
    <div class="ng-view"></div>
  `
});

m.config(($locationProvider, $routeProvider) => {
  $locationProvider.html5Mode(true);
  $routeProvider.when('/people', {template : '<people></people>'});
  $routeProvider.otherwise({template : '<empty></empty>'});
});
