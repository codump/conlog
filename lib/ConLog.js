const { ConLogSyntax } = require(`./ConLogSyntax`)
const { ConLogHookPost } = require(`./ConLogHookPost`)

/**
 * This is the core logging function. 
 * @function ConLog
 * TYPE OPTIONS:
 * - Error:   {1, `er`, `err`, `error`}
 * - Success: {2, `ok`}
 * - Warning: {3, `wa`, `war`, `warn`, `warning`}
 * - Object:  {4, `so`, `ob`, `obj`, `object`, `showobject`}
 * @param {(number|string)} [type] - - 1 | "error" | "er" | "err"
 *   - 2 | "ok"
 *   - 3 | "warning" | "wa" | "war" | "warn"
 *   - 4 | "showobject" | "so" | "ob" | "obj" | "object"
 * @returns {void}
 * 
 * @example ConLog('', 'ok')
 */
function ConLog(text, type) {
  if(global.$ConLogActive) {
    const timeNow = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    // convert type, based on type string value to number
    if(type === `er` || type === `err` || type === `error` || type === 1) {
      type = 1
    }
    if(type === `ok` || type === 2) {
      type = 2
    }
    if(type === `wa` || type === `war` || type === `warn` || type === `warning` || type === 3) {
      type = 3
    }
    if(type === `so` || type === `ob` || type === `obj` || type === `object` ||  type === `showobject` || type === 4) {
      type = 4
    }

    if(type === 1 && global.$ConLogShowErr){ // if type = error
      const newErr = new Error()
      const fileFrom = newErr.stack.split(`:`)[4]
      const lineLine = newErr.stack.split(`:`)[5]
      if(global.$ConLogShowColors) {
        console.log(`\x1b[90m[${timeNow}]\x1b[0m \x1b[31mError: ${text} \x1b[2m❌ ${fileFrom} on line:${lineLine}\x1b[0m`)
      } else {
        console.log(`[${timeNow}] Error: ${text} \x1b[2m❌ ${fileFrom} on line:${lineLine}\x1b[0m`)
      }
    } else // if type = ok
    if(type === 2 && global.$ConLogShowOk){
      if(global.$ConLogShowColors) {
        console.log(`\x1b[90m[${timeNow}]\x1b[0m \x1b[32mOK: ${text}\x1b[0m`)
      } else {
        console.log(`[${timeNow}] OK: ${text}`)
      }
    } else // if type = warning
    if(type === 3 && global.$ConLogShowWar){
      const newWar = new Error()
      const fileFrom = newWar.stack.split(`:`)[4]
      const lineLine = newWar.stack.split(`:`)[5]
      if(global.$ConLogShowColors) {
        console.log(`\x1b[90m[${timeNow}]\x1b[0m \x1b[33mWarning: ${text} \x1b[2m⚠️ ${fileFrom} on line:${lineLine}\x1b[0m`)
      } else {
        console.log(`[${timeNow}] Warning: ${text} \x1b[2m⚠️ ${fileFrom} on line:${lineLine}\x1b[0m`)
      }
    } else // if type = showobject
    if(type === 4 && global.$ConLogShowObject){
      text = JSON.stringify(text, null, 2)
      if(global.$ConLogShowColors) {
        const object = ConLogSyntax(text)
        console.log(`\x1b[90m[${timeNow}]\x1b[0m \x1b[34m\nObject: ${object}\x1b[0m\n`)
      } else {
        console.log(`\n[${timeNow}] Object: ${text}\n`)
      }
    } else 
    if(type === 0 && global.$ConLogShowErr){ // if type = ConLog system
      if(global.$ConLogShowColors) {
        console.log(`\x1b[90m[${timeNow}]\x1b[0m \x1b[41mConLog System Error: ${text}\x1b[0m`)
      } else {
        console.log(`[${timeNow}] ConLog System Error: ${text}`)
      }
    } else {
      // if no type is set give default
      if(type !== 1 && type !== 2 && type !== 3 && type !== 4 && type !== 0) {
        if(global.$ConLogShowColors) {
          if(typeof text === `object`) { // auto-detect if type is object, no stringify without type 4 set.
            console.log(text)
          } else {
            console.log(`\x1b[90m[${timeNow}]\x1b[0m \x1b[34m${text}\x1b[0m`)
          }
        } else {
          console.log(text)
        }
      }
    }
    // ConLogActive is true then check webhook
    if(global.$ConLogWebhook) {
      if(!type || type === 0 && global.$ConLogShowErr || type === 1 &&  global.$ConLogShowErr || type === 2 && global.$ConLogShowOk || type  === 3 && global.$ConLogShowWar || type === 4 && global.$ConLogShowObject) {
        if (!String(text).includes("force-hook")) {
          ConLogHookPost(type, text)
        }
      } 
    }
  }
  // Force webhook when ConLogActive is false but ConLogWebhook is true
  if(global.$ConLogWebhook) {
    if (String(text).includes("force-hook")) {
      text = text.replaceAll(`force-hook`, "# FORCED HOOK:\n")
      ConLogHookPost(1, text)
    }
  }
}

/** 
 * @type {function(*, (number|string)=): void} 
 */
module.exports = ConLog