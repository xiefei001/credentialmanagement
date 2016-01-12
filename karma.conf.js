module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-route/angular-route.js',
            'src/*.js',
            'src/**/*.js',
            'tests/**/*.js'
        ],
        preprocessors: {
            "**/*.js": "coverage"
        },
        autoWatch: true,
        singleRun: true,
        port: 9876,

        frameworks: ['jasmine'],

        reporters: ['progress', 'coverage'],
        browsers: ['Chrome'],
        color: true,
        logLevel: config.LOG_INFO,
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'tests/unit.xml',
            suite: 'unit'
        }

    });
};
