(function(app){
    "use strict";

    var lessonCtrl = function ($routeParams, $window, lessonSvc) {
        var vm = this;
        vm.lesson = {}
        vm.state = {};
        vm.state.next = parseInt($routeParams.number) + 1

        lessonSvc.getLessonData($routeParams.number).then(function (lesson) {
            vm.lesson = lesson;
        });

        vm.nextLesson = function () {
            $window.location = '/lesson/' + parseInt($routeParams) + 1;
        }
    }

    app.controller('lessonCtrl', lessonCtrl);

})(angular.module('md'))
