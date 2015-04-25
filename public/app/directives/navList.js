(function(app){
    "use strict";

    var navList = function(){
        return {
            restrict : 'E',
            templateUrl : 'app/directives/navlist.html',
            scope : {
                lessons : '=',
                lesson : '='
            }
        }
    }

    app.directive('navList', navList);

})(angular.module('md'))
