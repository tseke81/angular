(function(ITP, undefined){

    /** 
     * @ngdoc function
     * @name ITP
     * @id ITP
     * @description
     * 
     * Setup ITP application parameters for AngularJs
    */
    ITP.version         = "1.0.0";
    ITP.PartialsPath    = "partials/";
    ITP.Factory         = {};
    ITP.Modules         = {};
    ITP.Configs         = {};
    ITP.Controllers     = {};
    ITP.Directives      = {};

}(window.ITP = window.ITP || {}));
(function (Modules, undefined){

    /**
     * @ngdoc object
     * @id ITP
     * @name ITP
     * @description
     * 
     * This module initializes  the ITP Angular module
     */
    Modules.ITP = angular.module("itp", ['ngRoute']);

}(ITP.Modules = ITP.Modules || {}));
(function (Configs, undefined){

    /**
     * @ngdoc object
     * @id ITP
     * @name ITP
     * @description
     * 
     * This module initializes  the ITP Angular module
     */
    ITP.Modules.ITP.config(['$routeProvider', function($routeProvider){
        $routeProvider
          .when('/', {
              templateUrl: ITP.PartialsPath + '/home.html'
          })
          .when('/plan-detail', {
              templateUrl: ITP.PartialsPath + '/plan-detail.html'
          })
          .otherwise({
              redirectTo: '/',
              templateUrl: ITP.PartialsPath + '/home.html'
          })
    }]);

}(ITP.Configs = ITP.Configs || {}));
(function(Directives, undefined){

    ITP.Modules.ITP.directive("datepicker", [function(){
       return {
        restrict: 'A',
        require : 'ngModel',
        link : function ($scope, $element, $attrs, $controller) {
            var $input = $element.find('#my_hidden_input');
            
            $input.datepicker({
                 dateFormat:'dd/mm/yy',
            });
        }
    }
        
    }]);
}(ITP.Directives = ITP.Directives || {}));
(function (Controllers, undefined){
    ITP.Modules.ITP.controller("HomePageCtrl", ['$scope', function ($scope){
        console.log('controller for the home page');

        $scope.name = 'Prince';
    }]);
}(ITP.Controllers = ITP.Controllers || {}));

(function(Directives, undefined){

    ITP.Modules.ITP.directive("homepage", [function(){
        return{
            retrict: 'E',
            controller: 'HomePageCtrl',
            templateUrl: ITP.PartialsPath + "/home.html",
            link: function (scope, elm, attrs){
                console.log("directive for the home page");
            }
        }
    }]);
}(ITP.Directives = ITP.Directives || {}));