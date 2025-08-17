global.$ConLogActive = true
global.$ConLogShowErr = true
global.$ConLogShowOk = true
global.$ConLogShowWar = true
global.$ConLogShowObject = true
global.$ConLogShowColors = true
global.$ConLogStartMsg = false

const ConLogInit = require('./ConLogInit')
const ConLogSet = require('./ConLogSet')
const ConLog = require('./ConLog')
const ConLogStartMsg = require('./ConLogStartMsg')

// CommonJS export (keep this)
module.exports = {
  ConLogInit,
  ConLogSet,
  ConLog,
  ConLogStartMsg
}

// Add ES6 exports for better VS Code support
module.exports.ConLogInit = ConLogInit
module.exports.ConLogSet = ConLogSet
module.exports.ConLog = ConLog
module.exports.ConLogStartMsg = ConLogStartMsg