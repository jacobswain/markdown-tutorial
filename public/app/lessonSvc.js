(function (app) {
    "use strict";

    var lessonSvc = function ($q) {
        var lessons = [
            new Lesson("1", 'Paragraphs', '', new Validator(['This is paragraph 1\n\nThis is paragraph 2'])),
            new Lesson("2", 'Headings', '', new Validator(['# This is an h1 tag\n\n## This is an h2 tag', '# This is an h1 tag\n## This is an h2 tag'])),
            new Lesson("3", 'Blockquotes', '', new Validator(["In the words of Bruce Lee:\n\n> Do not pray for an easy life, pray for strength to endure a difficult one", "In the words of Bruce Lee:\n> Do not pray for an easy life, pray for strength to endure a difficult one"])),
            new Lesson("4", 'Styling Text', '', new Validator(["\\*\\*This is bold text\\*\\*"])),
            new Lesson("5", 'Unordered Lists', '', new Validator(["\\* Item 1\n\\* Item 2\n\\* Item 3"])),
            new Lesson("6", 'Ordered Lists', '', new Validator(["1. Item 1\n2. Item 2\n3. Item 3"])),
            new Lesson("7", 'Nested Lists', '', new Validator(["1. Item 1\n   1. Item 2\n   2. Item 3"])),
            new Lesson("8", 'Inline Hyperlinks', '', new Validator(["\\[Google\\]\\(http://www.google.com\\)"])),
            new Lesson("9", 'Reference Hyperlinks', '', new Validator(["\\[Google\\]\\[My First Link\\]\n\n\\[My First Link\\]: http://www.google.com"])),
            new Lesson("10", 'Image Links', '', new Validator(["!\\[\\]\\(https://www.google.com/images/srpr/logo11w.png\\)"])),
            new Lesson("11", 'Code Spans', '', new Validator(["This is `inline code`"])),
            new Lesson("12", 'Code Blocks', '', new Validator(['To write output use:\n\n    console.log\\(\'Hello world\'\\)', 'To write output use:\n    console.log\\(\'Hello world\'\\)'])),
            new Lesson("13", 'Escape Characters', '', new Validator(["\\\\" + "\\*Italics\\\\" + "\\*"])),
            new Lesson("14", 'Nesting Code in Lists', '', new Validator(["\\* Item 1\n\n      console.log\\('Hello world'\\)\n\\* Item 2", "\\* Item 1\n\n      console.log\\('Hello world'\\)\n\n\\* Item 2"]))
        ];

        function getLessonData(lessonNumber) {
            var d = $q.defer();
            lessons.forEach(function (lesson) {
                if (lesson.number == lessonNumber) {
                    lesson.order = 'Lesson ' + lesson.number + ' of '+ lessons.length;
                    d.resolve(lesson);
                }
            });
            return d.promise;
        }

        return {
            getLessonData: getLessonData,
            lessons : lessons
        }
    }

    app.factory('lessonSvc', lessonSvc);

})(angular.module('md'));
