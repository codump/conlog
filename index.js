global.$ConLogActive = true
global.$ConLogShowErr = true
global.$ConLogShowOk = true
global.$ConLogShowWar = true
global.$ConLogShowObject = true
global.$ConLogShowColors = true
global.$ConLogStartMsg = false
global.$ConLogWebhook = false
global.$ConLogHookURL = ""

exports.ConLogInit = require(`./lib/ConLogInit`)
exports.ConLogSet = require(`./lib/ConLogSet`)
exports.ConLogWebhook = require(`./lib/ConLogWebhook`)
exports.ConLog = require(`./lib/ConLog`)
exports.ConLogStartMsg = require(`./lib/ConLogStartMsg`)