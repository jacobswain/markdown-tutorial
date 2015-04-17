(function(app){
    "use strict";

    var navList = function(){
        return {
            restrict : 'E',
            templateUrl : 'app/directives/navList.html'
        }
    }

    app.directive('navList', navList);

})(angular.module('md'))
