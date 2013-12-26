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
    files: ['public/*.html'],
    tasks: []
  },
  scripts: {
    files: ['public/js/**/*.js'],
    tasks: ['build']
  }
};
