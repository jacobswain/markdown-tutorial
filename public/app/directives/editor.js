(function(app){
    "use strict";

    app.directive('editor', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/editor.html',
            scope: {
                text: '=',
                lesson: '='
            },
            controller : function($scope){
                $scope.$watch('text', function(){
                    if($scope.lesson.isComplete() && !$scope.lesson.notified){
                        toastr.success('Great job!  Lesson complete.');
                        $scope.lesson.notified = true;
                    };
                })
            }
        }
    });

})(angular.module('md'));