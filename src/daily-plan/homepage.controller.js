(function (Controllers, undefined){
    ITP.Modules.ITP.controller("HomePageCtrl", ['$scope', function ($scope){
        console.log('controller for the home page');

        $scope.name = 'Prince';
    }]);
}(ITP.Controllers = ITP.Controllers || {}));
