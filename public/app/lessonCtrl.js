(function (app) {
    "use strict";

    var lessonCtrl = function ($routeParams, $window, lessonSvc, uiTour) {
        var vm = this;
        vm.lessonSvc = lessonSvc;
        vm.lesson = {}
        vm.state = {};
        vm.state.next = parseInt($routeParams.number) + 1;
        vm.tour = uiTour;
        vm.tour.start();

        lessonSvc.getLessonData($routeParams.number).then(function (lesson) {
            vm.lesson = lesson;
        });

        vm.nextLesson = function () {
            vm.tour.end();
        }
    }

    app.controller('lessonCtrl', lessonCtrl);

})(angular.module('md'))
