(function(app){
    "use strict";

    var navList = function(){
        return {
            restrict : 'E',
            templateUrl : 'app/directives/navlist.html',
            scope : {
                lessons : '='
            }
        }
    }

    app.directive('navList', navList);

})(angular.module('md'))
