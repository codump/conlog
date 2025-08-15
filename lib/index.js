global._ConLogActive = true;
global._ConLogStartMsg = false;
global._ConLogShowErr = true;
global._ConLogShowOk = true;
global._ConLogShowWar = true;
global._ConLogShowObject = true;
global._ConLogShowColors = true;

exports.ConLogInit = require('./ConLogInit');
exports.ConLogStartMsg = require('./ConLogStartMsg');
exports.ConLogSet = require('./ConLogSet');
exports.ConLog = require('./ConLog');