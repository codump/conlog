global.$ConLogActive = true
global.$ConLogShowErr = true
global.$ConLogShowOk = true
global.$ConLogShowWar = true
global.$ConLogShowObject = true
global.$ConLogShowColors = true
global.$ConLogStartMsg = false
global.$ConLogWebhook = false
global.$ConLogHookProvider = ""
global.$ConLogHookURL = ""

const ConLogInit = require('./ConLogInit')
const ConLogSet = require('./ConLogSet')
const ConLogWebhook = require('./ConLogWebhook')
const ConLog = require('./ConLog')
const ConLogStartMsg = require('./ConLogStartMsg')

module.exports = {
  ConLogInit,
  ConLogSet,
  ConLogWebhook,
  ConLog,
  ConLogStartMsg
}