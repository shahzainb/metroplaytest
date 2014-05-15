/**
 * Initialising the HomeService. Dependencies: $http.
 */
metroApp.service("HomeService", ["$http", function($http){

    this.getMetroData = function () {
        return $http.get('/data/metroData.json');
    }
}]);
