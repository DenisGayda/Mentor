// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-html-reporter'),
            require('karma-mocha-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
        ],
        coverageIstanbulReporter: {
            reports: [
                'html',
                'lcovonly',
            ],
            fixWebpackSourcePaths: true,
        },
        htmlReporter: {
            outputDir: 'reports', // where to put the reports
            focusOnFailures: true, // reports show failures on start
            namedFiles: true, // name files instead of creating sub-directories
            pageTitle: 'Unit Tests', // page title for reports; browser info by default
            urlFriendlyName: true, // simply replaces spaces with _ for files/dirs
            reportName: 'index', // report summary filename; browser info by default
            preserveDescribeNesting: true, // experimental. folded suites stay folded
            foldAll: true, // experimental. reports start folded (only with preserveDescribeNesting)
        },
        reporters: [
            'coverage-istanbul',
            'html',
            'mocha',
        ],
        port: 4000,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['ChromeHeadless_without_security'],
        customLaunchers: {
            ChromeHeadless_without_security: {
                base: 'ChromeHeadless',
                flags: ['--disable-web-security'],
            },
        },
        singleRun: true,
    });
};
