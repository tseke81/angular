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