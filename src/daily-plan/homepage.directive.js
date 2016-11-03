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