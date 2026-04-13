/**
 * Initialize ConLogWebhook to send logs to a webhook.
 * 
 * @param {boolean} status - Enable or disable webhook logging
 *   - true: Enable all ConLog output to the specified webhook URL
 *   - false: Completely disable all ConLog output to webhooks (default)
 * @param {string} provider - The webhook provider (e.g., "discord")
 * @param {string} url - The webhook URL to send messages to
 */

function ConLogWebhook(status, provider, url) {
  global.$ConLogWebhook = status
  global.$ConLogHookURL = url
  global.$ConLogHookProvider = provider
}

module.exports = ConLogWebhook