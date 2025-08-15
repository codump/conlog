global._ConLogActive = true;
global._ConLogStartMsg = false;
global._ConLogShowErr = true;
global._ConLogShowOk = true;
global._ConLogShowWar = true;
global._ConLogShowObject = true;
global._ConLogShowColors = true;

exports.ConLogInit = require('./lib/ConLogInit');
exports.ConLogSet = require('./lib/ConLogSet');
exports.ConLogStartMsg = require('./lib/ConLogStartMsg');
exports.ConLog = require('./lib/ConLog');