const { webhookDiscord } = require(`./hook-provider/discord.js`)

/**
 * Function to post logs to a webhook.
 * @param {string | number} logType - defines what type of log is being sent.
 * @param {string | object} logText - text or object to be sent to the webhook.
 */ 

function ConLogHookPost(logType, logText) {

  if(global.$ConLogHookProvider === "discord") {
    webhookDiscord(logType, logText)
  }
  
}

exports.ConLogHookPost = ConLogHookPost