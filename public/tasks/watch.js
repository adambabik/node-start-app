module.exports = {
  options: {
    spawn: false,
    interrupt: false,
    debounceDelay: 250,
    livereload: {
      port: 9000
    }
  },
  statics: {
    files: ['*.html'],
    tasks: []
  },
  scripts: {
    files: ['js/**/*.js'],
    tasks: ['build']
  }
};
