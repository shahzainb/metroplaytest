/**
 * Initialising the HomeController. Dependencies: $scope and HomeService
 */
metroApp.controller("HomeController", ["$scope", "HomeService", function($scope, HomeService){

    $scope.viewModel = this;

    var _self = this;

    _self.getData = function () {
        var metroData = HomeService.getMetroData();

        metroData
            .success(function(data){
                _self.metroData = data;
            })
            .error(function(response){
                //TO-DO toastr
                console.log(response);
            });
    }

    _self.playGame = function () {
        alert("Thanks for playing!");
    }

    _self.getData();
}]);
