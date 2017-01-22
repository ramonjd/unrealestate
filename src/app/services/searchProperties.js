import angular from 'angular'

// https://services.realestate.com.au/services/listings/summaries/search?query={%22channel%22:%22buy%22,%22filters%22:{%22surroundingSuburbs%22:%22true%22,%22excludeTier2%22:%22true%22,%22geoPrecision%22:%22address%22,%22excludeAddressHidden%22:%22true%22,%22localities%22:[{%22searchLocation%22:%22Elwood,%20VIC%203184%22}]},%22pageSize%22:%22500%22}

// https://services.realestate.com.au/services/listings/search?query={%22channel%22:%22buy%22,%22filters%22:{%22surroundingSuburbs%22:%22true%22,%22excludeTier2%22:%22true%22,%22geoPrecision%22:%22address%22,%22excludeAddressHidden%22:%22true%22,%22localities%22:[{%22searchLocation%22:%22Elwood,%20VIC%203184%22}]},%22pageSize%22:%2220%22}

// for config


const url = 'https://services.realestate.com.au/services/listings/search?query='
const mock =  'https://services.realestate.com.au/services/listings/search?query={%22channel%22:%22buy%22,%22filters%22:{%22surroundingSuburbs%22:%22true%22,%22excludeTier2%22:%22true%22,%22geoPrecision%22:%22address%22,%22excludeAddressHidden%22:%22true%22,%22localities%22:[{%22searchLocation%22:%22Elwood,%20VIC%203184%22}]},%22pageSize%22:%2220%22}'

const HTTP = new WeakMap()
// use weak maps : https://www.sitepoint.com/writing-angularjs-apps-using-es6/

class SearchPropertiesService {
  constructor($http) {
      HTTP.set(this, $http)
  }

  getProperties() {
      return HTTP.get(this).get(mock).then(response => {
          return response.data
      })
  }
  static searchPropertiesFactory($http){
      return new SearchPropertiesService($http)
    }
}
SearchPropertiesService.searchPropertiesFactory.$inject = ['$http']

export default angular.module('search-properties.service', [])
  .service('searchProperties', SearchPropertiesService.searchPropertiesFactory).name
