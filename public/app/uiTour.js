(function (app) {
    "use strict";

    function uiTour() {

        var storage = localStorageAvailable() ? window.localStorage : {};

        var tour = new Tour({
            storage : storage,
            steps: [{
                element: "#lesson",
                title: 'Lessons',
                content: 'Read the instructions here for each lesson.'
            }, {
                element: "#example",
                title: 'Examples',
                content: 'You\'ll see an example here that you need to recreate in the editor field.',
                placement: 'bottom'
            }, {
                element: "#editor",
                title: 'Editor',
                content: 'Recreate the example here using Markdown text.  You\'ll receive a notification when you\'ve completed the lesson.',
                placement: 'bottom'
            }, {
                element: "#result",
                title: 'Output',
                content: 'After typing your Markdown text in the editor field you\'ll see the formatted text here.',
            }, {
                element: "#next",
                title: 'Next Lesson',
                content: 'Click here when you\'re ready to view the next lesson.',
                placement: 'top'
            }
            ]
        });

        function start() {
            tour.init();
            tour.start();
        }

        function end(){
            tour.end();
        }

        function localStorageAvailable(){
            var mod = 'md';
            try {
                localStorage.setItem(mod, mod);
                localStorage.removeItem(mod);
                return true;
            } catch(e) {
                return false;
            }
        }

        return {
            start: start,
            end : end
        }
    }

    app.factory('uiTour', uiTour);

})(angular.module('md'));