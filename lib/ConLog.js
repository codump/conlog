const { ConLogSyntax } = require(`./ConLogSyntax`)

/**
 * @param {*} text - You can log anything, not just text
 * @param {(number|string)} [type] -  1 | "error" | "er" | "err"
 *   - 2 | "ok"
 *   - 3 | "warning" | "wa" | "war" | "warn"
 *   - 4 | "showobject" | "so" | "ob" | "obj" | "object"
 * @returns {void}
 */
function ConLog (text, type) {
  if($ConLogActive) {
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

    if(type === 1 && $ConLogShowErr){ // if type = error
      const newErr = new Error()
      const fileFrom = newErr.stack.split(`:`)[4]
      const lineLine = newErr.stack.split(`:`)[5]
      if($ConLogShowColors) {
        console.log(`\x1b[31mError: ${text} \x1b[2m❌ ${fileFrom} on line:${lineLine}\x1b[0m`)
      } else {
        console.log(`Error: ${text} \x1b[2m❌ ${fileFrom} on line:${lineLine}\x1b[0m`)
      }
    } else // if type = ok
    if(type === 2 && $ConLogShowOk){
      if($ConLogShowColors) {
        console.log(`\x1b[32mOK: ${text}\x1b[0m`)
      } else {
        console.log(`OK: ${text}`)
      }
    } else // if type = warning
    if(type === 3 && $ConLogShowWar){
      const newWar = new Error()
      const fileFrom = newWar.stack.split(`:`)[4]
      const lineLine = newWar.stack.split(`:`)[5]
      if($ConLogShowColors) {
        console.log(`\x1b[33mWarning: ${text} \x1b[2m⚠️ ${fileFrom} on line:${lineLine}\x1b[0m`)
      } else {
        console.log(`Warning: ${text} \x1b[2m⚠️ ${fileFrom} on line:${lineLine}\x1b[0m`)
      }
    } else // if type = showobject
    if(type === 4 && $ConLogShowObject){
      text = JSON.stringify(text, null, 2)
      if($ConLogShowColors) {
        const object = ConLogSyntax(text)
        console.log(`\x1b[34m\nObject: ${object}\x1b[0m\n`)
      } else {
        console.log(`\nObject: ${text}\n`)
      }
    } else 
    if(type === 0 && $ConLogShowErr){ // if type = ConLog system
      if($ConLogShowColors) {
        console.log(`\x1b[41mConLog[sys] Error: ${text}\x1b[0m`)
      } else {
        console.log(`Error: ${text}`)
      }
    } else {
      // if no type is set give default
      if(type !== 1 && type !== 2 && type !== 3 && type !== 4 && type !== 0) {
        if($ConLogShowColors) {
          if(typeof text === `object`) { // auto-detect if type is object, no stringify without type 4 set.
            console.log(text)
          } else {
            console.log(`\x1b[34m%s\x1b[0m`, text)
          }
        } else {
          console.log(text)
        }
      }
    }
  }
}
module.exports = ConLog