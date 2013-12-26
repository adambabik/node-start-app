"use strict";

var winston = require('winston');
var env     = require('./env');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({
      filename: __dirname + '/tmp/all.log',
      timestamp: true
    })
  ]
});

if (env.env() === env.Envs.DEV) {
  logger.add(
    winston.transports.Console,
    { prettyPrint: true, colorize: true }
  );
}

module.exports = logger;
