(function(app){
    "use strict";

    function progressBar(){
        return {
            restrict : 'E',
            templateUrl : 'app/directives/progressBar.html',
            scope : {
                lessons : '=',
                lesson : '='
            }
        }
    }

    app.directive('progressBar', progressBar);

})(angular.module("md"));