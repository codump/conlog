/**
 * Display startup message showing current ConLog settings.
 * Useful for debugging or confirming ConLog is properly initialized.
 * 
 * @param {boolean} status - Whether to display startup message (default: false)
 * @returns {void}
 */

function ConLogStartMsg (status) {
  global.$ConLogStartMsg = status
  if(global.$ConLogStartMsg && global.$ConLogActive) {
    let conLogMsg = `\x1b[34mCon\x1b[0m\x1b[36mLog\x1b[0m \x1b[37mhas loaded and is ready for usage. You have applied the following settings:`
    if(global.$ConLogShowErr) {
      conLogMsg = `${conLogMsg} Show errors = \x1b[32mtrue\x1b[0m.`
    } else {
      conLogMsg = `${conLogMsg} Show errors = \x1b[31mfalse\x1b[0m.`
    }
    if(global.$ConLogShowOk) {
      conLogMsg = `${conLogMsg} Show ok = \x1b[32mtrue\x1b[0m.`
    } else {
      conLogMsg = `${conLogMsg} Show ok = \x1b[31mfalse\x1b[0m.`
    }
    if(global.$ConLogShowWar) {
      conLogMsg = `${conLogMsg} Show warnings = \x1b[32mtrue\x1b[0m.`
    } else {
      conLogMsg = `${conLogMsg} Show warnings = \x1b[31mfalse\x1b[0m.`
    }
    if(global.$ConLogShowObject) {
      conLogMsg = `${conLogMsg} Show objects = \x1b[32mtrue\x1b[0m.`
    } else {
      conLogMsg = `${conLogMsg} Show objects = \x1b[31mfalse\x1b[0m.`
    }
    if(global.$ConLogShowColors) {
      conLogMsg = `${conLogMsg} Show colors = \x1b[32mtrue\x1b[0m.`
    } else {
      conLogMsg = `${conLogMsg} Show colors = \x1b[31mfalse\x1b[0m.`
    }

    console.log(conLogMsg)
  }
}

module.exports = ConLogStartMsg