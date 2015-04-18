(function(app){
    "use strict";

    var mdFooter = function () {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/footer.html',
            scope: {
                number: '='
            },
            controller: function ($scope) {
                $scope.previous = $scope.number - 2;
            }
        }
    };

    app.directive('mdFooter', mdFooter);

})(angular.module('md'));