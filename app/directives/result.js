(function(app){
    "use strict";

    var result = function () {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/result.html',
            scope: {
                text: '='
            }
        }
    };

    app.directive('result', result);

})(angular.module('md'))