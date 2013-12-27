"use strict";

var express = require('express');
var env     = require('./env');
var config  = env.conf(require('./config.json'));
var logger  = require('./logger');
var app     = express();

logger.info('NODE_ENV=' + env.env());

app.set('view engine', 'ejs');
app.set('views', process.cwd() + '/public');

app.engine('html', require('ejs').renderFile);

app.configure('development', function () {
  app.use(express.logger());
});

app.configure(function () {
  app.use(app.router);
  app.use(express.static('public'));
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: config.cookieSecret }));
  app.use(express.bodyParser());
});

// routes
//

app.get('*', function (req, res) {
  res.end("Hello from " + req.url + " !");
});

app.listen(config.port);
logger.info("Listening on " + config.port);
