/*jshint node: true */

"use strict";

var path = require('path');

module.exports = function(grunt) {
  grunt.file.setBase('..');

  var config = require('load-grunt-config')(grunt, {
    configPath: path.join(__dirname, 'tasks'),
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

  grunt.registerTask('default', ['watch']);

  grunt.initConfig(config);
};
