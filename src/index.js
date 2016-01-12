'use strict';
var appModule = angular.module('app', ['ngRoute']);
appModule.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/' });
        $routeProvider.when('/', {
            templateUrl: 'passwordsetter.html'
        });
        $routeProvider.when('/pwdview/', {
            templateUrl: 'passwordviewer.html'
        });
    }]);
//# sourceMappingURL=index.js.map