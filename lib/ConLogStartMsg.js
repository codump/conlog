/**
 * @param {boolean} status - true = show start message / false = hide start message
 */ 

const ConLogStartMsg = (status) => {
  global.$ConLogStartMsg = status
  if($ConLogStartMsg) {
    let conLogMsg = `\x1b[34mCon\x1b[36mLog\x1b[0m has loaded and is ready for usage. You have applied the following settings:`
    if($ConLogShowErr) {
      conLogMsg = `${conLogMsg} Show errors = \x1b[32mtrue\x1b[0m.`
    } else {
      conLogMsg = `${conLogMsg} Show errors = \x1b[31mfalse\x1b[0m.`
    }
    if($ConLogShowOk) {
      conLogMsg = `${conLogMsg} Show ok = \x1b[32mtrue\x1b[0m.`
    } else {
      conLogMsg = `${conLogMsg} Show ok = \x1b[31mfalse\x1b[0m.`
    }
    if($ConLogShowWar) {
      conLogMsg = `${conLogMsg} Show warnings = \x1b[32mtrue\x1b[0m.`
    } else {
      conLogMsg = `${conLogMsg} Show warnings = \x1b[31mfalse\x1b[0m.`
    }
    if($ConLogShowObject) {
      conLogMsg = `${conLogMsg} Show objects = \x1b[32mtrue\x1b[0m.`
    } else {
      conLogMsg = `${conLogMsg} Show objects = \x1b[31mfalse\x1b[0m.`
    }
    if($ConLogShowColors) {
      conLogMsg = `${conLogMsg} Show colors = \x1b[32mtrue\x1b[0m.`
    } else {
      conLogMsg = `${conLogMsg} Show colors = \x1b[31mfalse\x1b[0m.`
    }

    console.log(conLogMsg)
  }
}

module.exports = ConLogStartMsg