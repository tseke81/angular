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