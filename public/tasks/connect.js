module.exports = {
  server: {},
  options: {
    hostname: 'localhost',
    port: 8000,
    base: '.',
    middleware: function(connect, options) {
      "use strict";

      return [
        connect.static(options.base)
      ];
    }
  }
};
