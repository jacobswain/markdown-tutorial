(function () {
    "use strict";

    var app = angular.module('md', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'hc.commonmark', 'bm.bsTour']);

    app.config(function ($routeProvider) {

        $routeProvider.otherwise('/');

        $routeProvider.when('/', {
            templateUrl: 'app/home.html'
        }).when('/overview', {
            templateUrl: 'app/lessons/overview.html'
        }).when('/done', {
            templateUrl: 'app/lessons/done.html'
        }).when('/lesson/:number', {
            templateUrl: function (params) {
                return 'app/lessons/lesson' + params.number + '.html';
            }
        });
    });

})()
