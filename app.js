/* eslint-disable no-console, no-undef */

var path = require('path');

global.root_require = function root_require(name) {
  return require(path.join(__dirname, name));
};

var express = require('express');

var config = root_require('config');
var router = root_require('router');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(config.public.route, express.static(config.public.folder));
app.use('/', router);

app.listen(config.port, function() {
  console.log('Started HTTP server on port', config.port);
});
