(function(app){
    "use strict";

    app.directive('editor', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/editor.html',
            scope: {
                text: '='
            }
        }
    });

})(angular.module('md'));