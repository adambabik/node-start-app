/*jshint node: true */

"use strict";

var path = require('path');

module.exports = function(grunt) {
  var config = require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'tasks'),
    init: true,
    config: {
      env: process.env,
      pkg: grunt.file.readJSON('package.json')
    }
  });

  // Tasks
  grunt.registerTask(
    'build',
    'Compile all JS scripts to script.js',
    ['clean', 'browserify']
  );

  grunt.registerTask('default', ['connect', 'watch']);

  grunt.initConfig(config);
};
