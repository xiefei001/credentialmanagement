'use strict';
var appModule = angular.module('app', ['ngRoute']);
appModule.config(["$routeProvider", ($routeProvider:ng.route.IRouteProvider) => {
    $routeProvider.otherwise({redirectTo: '/'});

    $routeProvider.when('/', {
        templateUrl: 'passwordsetter.html'
    });
    $routeProvider.when('/pwdview/', {
        templateUrl: 'passwordviewer.html'
    });
}]);
