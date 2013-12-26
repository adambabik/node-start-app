"use strict";

var DEFAULT_ENV = 'development';

var env = module.exports = {};

env.Envs = {
  PROD: 'prod',
  DEV: 'dev',
  TEST: 'test'
};

env.map = {
  production: env.Envs.PROD,
  development: env.Envs.DEV,
  test: env.Envs.TEST
};

env.env = function () {
  return this.map[process.env.NODE_ENV || DEFAULT_ENV];
};

env.conf = function (config, aEnv) {
  var env = aEnv || process.env.NODE_ENV || DEFAULT_ENV;
  var envConfig = config[this.map[env]];

  if (!envConfig) {
    throw new Error("Could not find a configuration for env = " + env);
  }

  return envConfig;
};

