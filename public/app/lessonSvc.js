(function (app) {
    "use strict";

    var lessonSvc = function ($q) {
        var lessons = [
            new Lesson("1", '', 'This is paragraph 1\n\nThis is paragraph 2'),
            new Lesson("2", '', '# This is an h1 tag\n\n## This is an h2 tag'),
            new Lesson("3", '', "In the words of Bruce Lee:\n\n> Do not pray for an easy life, pray for strength to endure a difficult one"),
            new Lesson("4", '', "\\*\\*This is bold text\\*\\*"),
            new Lesson("5", '', "\\* Item 1\n\\* Item 2\n\\* Item 3"),
            new Lesson("6", '', "1. Item 1\n2. Item 2\n3. Item 3"),
            new Lesson("7", '', "1. Item 1\n   1. Item 2\n   2. Item 3"),
            new Lesson("8", '', "\\[Google\\]\\(http://www.google.com\\)"),
            new Lesson("9", '', "\\[Google\\]\\[My First Link\\]\n\n\\[My First Link\\]: http://www.google.com"),
            new Lesson("10", '', "!\\[\\]\\(https://www.google.com/images/srpr/logo11w.png\\)"),
            new Lesson("11", '', "This is `inline code`"),
            new Lesson("12", '', 'To write output use:\n\n    console.log\\(\'Hello world\'\\)'),
            new Lesson("13", '',  '\\\\'+ "\\*Italics\\\\" + "\\*")
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
