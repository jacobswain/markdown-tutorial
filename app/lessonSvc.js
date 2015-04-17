(function (app) {
    "use strict";

    var lessonSvc = function ($q) {
        var lessons = [{
                number: "1",
                text: 'In 2011, Watson competed on Jeopardy! against former winners Brad Rutter and Ken Jennings'
            }, {
                number: "2",
                text: '# This is an h1 tag'
            }, {
                number: "3",
                text: "In the words of Bruce Lee:"
            }, {
                number: "4",
                text: "*This text with be italic*"
            }, {
                number: "5",
                text: "* Item 1"
            }, {
                number: "6",
                text: "1. Item 1"
            }, {
                number: "7",
                text: "1. Item 1"
            }, {
                number: "8",
                text: "[Google](http://www.google.com) \n\n "
            }, {
                number: "9",
                text: "The Google Self-Driving Car is a project by [Google][My First Link] that involves developing technology for autonomous cars.\n\n[My First Link]: http://www.google.com"
            }, {
                number: "10",
                text: "![](https://www.google.com/images/srpr/logo11w.png)"
            }
        ];

        function getLessonData(lessonNumber) {
            var d = $q.defer();
            lessons.forEach(function (lesson) {
                if (lesson.number == lessonNumber) {
                    d.resolve(lesson);
                }
            });
            return d.promise;
        }

        return {
            getLessonData: getLessonData
        }
    }

    app.factory('lessonSvc', lessonSvc);

})(angular.module('md'));
