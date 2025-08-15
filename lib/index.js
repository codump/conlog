global.$ConLogActive = true
global.$ConLogShowErr = true
global.$ConLogShowOk = true
global.$ConLogShowWar = true
global.$ConLogShowObject = true
global.$ConLogShowColors = true
global.$ConLogStartMsg = false

exports.ConLogInit = require(`./ConLogInit`)
exports.ConLogSet = require(`./ConLogSet`)
exports.ConLog = require(`./ConLog`)
exports.ConLogStartMsg = require(`./ConLogStartMsg`)