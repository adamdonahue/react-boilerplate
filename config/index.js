var defaultConfig = require('./default');
var config;

switch(process.env['NODE_ENV']) {
default:
  config = defaultConfig;
  break;
}

module.exports = config;
