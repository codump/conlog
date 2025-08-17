/**
 * @param {boolean} status - true = show start message / false = hide start message
 */ 

function ConLogStartMsg (status) {
  global.$ConLogStartMsg = status
  if(global.$ConLogStartMsg && global.$ConLogActive) {
    let conLogMsg = `\x1b[34mCon\x1b[36mLog\x1b[0m has loaded and is ready for usage. You have applied the following settings:`
    if(global.$ConLogShowErr) {
      conLogMsg = `global.${conLogMsg} Show errors = \x1b[32mtrue\x1b[0m.`
    } else {
      conLogMsg = `global.${conLogMsg} Show errors = \x1b[31mfalse\x1b[0m.`
    }
    if(global.$ConLogShowOk) {
      conLogMsg = `global.${conLogMsg} Show ok = \x1b[32mtrue\x1b[0m.`
    } else {
      conLogMsg = `global.${conLogMsg} Show ok = \x1b[31mfalse\x1b[0m.`
    }
    if(global.$ConLogShowWar) {
      conLogMsg = `global.${conLogMsg} Show warnings = \x1b[32mtrue\x1b[0m.`
    } else {
      conLogMsg = `global.${conLogMsg} Show warnings = \x1b[31mfalse\x1b[0m.`
    }
    if(global.$ConLogShowObject) {
      conLogMsg = `global.${conLogMsg} Show objects = \x1b[32mtrue\x1b[0m.`
    } else {
      conLogMsg = `global.${conLogMsg} Show objects = \x1b[31mfalse\x1b[0m.`
    }
    if(global.$ConLogShowColors) {
      conLogMsg = `global.${conLogMsg} Show colors = \x1b[32mtrue\x1b[0m.`
    } else {
      conLogMsg = `global.${conLogMsg} Show colors = \x1b[31mfalse\x1b[0m.`
    }

    console.log(conLogMsg)
  }
}

module.exports = ConLogStartMsg