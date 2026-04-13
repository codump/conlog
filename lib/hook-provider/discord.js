const messageQueue = []
let isProcessing = false

/**
 * Function that sends to discord webhook.
 * @async
 * @param {string | number} type - defines what type of log is being sent
 * @param {string | object} text - text or object to be sent to the webhook
 */ 

async function webhookDiscord(type, text) {
  let embedColor
  let typeTxt
  const timeNow = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

  if(type === 0) {
    typeTxt = "System"
    embedColor = 16711680
  }
  if(type === 1) {
    typeTxt = "Error"
    embedColor = 16711680
  }
  if(type === 2) {
    typeTxt = "OK"
    embedColor = 65280
  }
  if(type === 3) {
    typeTxt = "Warning"
    embedColor = 16776960
  }
  if(type === 4) {
    typeTxt = "Object"
    embedColor = 255
    text = `\`\`\`json\n${text}\n\`\`\``
  }
  if(!type) {
    typeTxt = "undefined"
    embedColor = 16777215
  }

  messageQueue.push({
    embedColor,
    typeTxt,
    text,
    timeNow
  })
  processQueue()
}

async function processQueue() {
  if (isProcessing || messageQueue.length === 0) return
  isProcessing = true

  while (messageQueue.length > 0) {
    const item = messageQueue[0] 
    const timeNowLog = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

    try {
      const response = await fetch(`${global.$ConLogHookURL}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [
            {
              color: item.embedColor,
              title: `[${item.timeNow}] ${item.typeTxt}`,
              description: item.text,
            },
          ],
        }),
      })

      if (response.status === 429) {
        const retryAfter = (parseInt(response.headers.get('retry-after')) || 1) * 1000
        console.log(`\x1b[90m[${timeNowLog}]\x1b[0m \x1b[33mConLog System, webhook: Rate limited. Waiting ${retryAfter}ms...\x1b[0m`)
        await new Promise(resolve => setTimeout(resolve, retryAfter))
        continue
      }

      if (response.status != 204) {
        console.log(`\x1b[90m[${timeNowLog}]\x1b[0m \x1b[41mConLog System Error, webhook: ${response.statusText}\x1b[0m`)
      }

      messageQueue.shift()
      if (messageQueue.length > 0) {
        await new Promise(resolve => setTimeout(resolve, 500))
      }

    } catch (error) {
      console.log(`\x1b[90m[${timeNowLog}]\x1b[0m \x1b[41mConLog System Error, webhook: ${error}\x1b[0m`)
      messageQueue.shift() 
    }
  }

  isProcessing = false
}

exports.webhookDiscord = webhookDiscord