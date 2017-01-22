import './app.scss'
import angular from 'angular'
import ngRoute from 'angular-route'
import home from './components/home/'

angular.module('app', [ 'ngRoute', 'home' ])
  .config([
    '$routeProvider',
    '$locationProvider',
    function routing($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true)
      $routeProvider.when('/', {
          template: '<home></home>'
      })
    }
  ])
