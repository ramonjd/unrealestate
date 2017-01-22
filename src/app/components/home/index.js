//import './home.scss'
import angular from 'angular'
import HomeController from './home.controller'
import searchProperties from '../../services/searchProperties'

export default angular.module('home', [ 'search-properties.service' ])
  .component('home', {
    template: '<h2>{{$ctrl.name}}</h2><div ng-repeat="result in $ctrl.results">{{result.prettyUrl}}</div>',
    controller: [ 'searchProperties', HomeController ]

})
