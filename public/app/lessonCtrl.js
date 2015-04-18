(function (app) {
    "use strict";

    var lessonCtrl = function ($routeParams, $window, lessonSvc) {
        var vm = this;
        vm.lesson = {}
        vm.state = {};
        vm.state.next = parseInt($routeParams.number) + 1;

        vm.tour = new Tour({
            steps: [
                {
                    element: "#lesson",
                    title: 'Lessons',
                    content: 'Read the instructions here for each lesson.',
                },
                {
                    element: "#editor",
                    title: 'Editor',
                    content: 'Type your Markdown text here in the editor field.',
                    placement : 'bottom'
                }, {
                    element: "#result",
                    title: 'Output',
                    content: 'After typing your Markdown text in the editor field you\'ll see the formatted text here.',
                }, {
                    element: "#next",
                    title: 'Next Lesson',
                    content: 'Click here when you\'re ready to view the next lesson.',
                    placement : 'top'
                }
            ]
        });
        vm.tour.init();
        vm.tour.start();

        lessonSvc.getLessonData($routeParams.number).then(function (lesson) {
            vm.lesson = lesson;
        });

        vm.nextLesson = function () {
            $window.location = '/lesson/' + parseInt($routeParams) + 1;
        }
    }

    app.controller('lessonCtrl', lessonCtrl);

})(angular.module('md'))
