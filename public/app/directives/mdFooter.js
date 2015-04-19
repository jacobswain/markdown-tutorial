(function(app){
    "use strict";

    var mdFooter = function () {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/footer.html',
            scope: {
                number: '=',
                next: '&'
            },
            controller: function ($scope) {
                $scope.previous = $scope.number - 2;

                $scope.nextLesson = function(){
                    if($scope.next){
                        $scope.next();
                    }
                }
            }
        }
    };

    app.directive('mdFooter', mdFooter);

})(angular.module('md'));