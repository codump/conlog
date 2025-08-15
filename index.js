global.$ConLogActive = true
global.$ConLogShowOk = true
global.$ConLogShowWar = true
global.$ConLogShowObject = true
global.$ConLogShowColors = true
global.$ConLogStartMsg = false

exports.ConLogInit = require(`./lib/ConLogInit`)
exports.ConLogSet = require(`./lib/ConLogSet`)
exports.ConLog = require(`./lib/ConLog`)
exports.ConLogStartMsg = require(`./lib/ConLogStartMsg`)