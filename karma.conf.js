var webpackConfig = require('./webpack/config');

// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig (config) {
  config.set({
    frameworks: [
      'jasmine'
    ],

    reporters: [
      'spec'
    ],

    files: [
        'src/app/app.js',
        './node_modules/angular-mocks/angular-mocks.js',
        'src/**/*.spec.js'
    ],

    preprocessors: {
     'src/app/app.js' : ['webpack'],
     'src/**/*.spec.js': ['webpack']
    },

    browsers: [
      'Chrome'
    ],

    singleRun: true,

    webpackMiddleware: {
        noInfo: true
    },

    webpack: webpackConfig
  });
};
