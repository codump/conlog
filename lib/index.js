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

module.exports = {
  ConLogInit,
  ConLogSet,
  ConLog,
  ConLogStartMsg
}