
/**
 * @param {(number|string)} type - 1|er|err|error 2|ok 3|wa|war|warn|warning / 4|so|ob|obj|object|showobject
 * @param {(string|object)} text - text or object to display
 */
const ConLog = (type, text) => {
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
      if($ConLogShowColors) {
        console.log(`\x1b[41m%s\x1b[37m\x1b[0m`,`Error: ${text}`)
      } else {
        console.log(`Error: ${text}`)
      }
    } else // if type = ok
    if(type === 2 && $ConLogShowOk){
      if($ConLogShowColors) {
        console.log(`\x1b[32m%s\x1b[0m`, `OK: ${text}`)
      } else {
        console.log(`OK: ${text}`)
      }
    } else // if type = warning
    if(type === 3 && $ConLogShowWar){
      if($ConLogShowColors) {
        console.log(`\x1b[43m%s\x1b[30m\x1b[0m`,`Warning: ${text}`)
      } else {
        console.log(`Warning: ${text}`)
      }
    } else // if type = showobject
    if(type === 4 && $ConLogShowObject){
      text = JSON.stringify(text, null, 2)
      if($ConLogShowColors) {
        console.log(`\x1b[36m%s\x1b[0m`, `\nObject: ${text}\n`)
      } else {
        console.log(`\nObject: ${text}\n`)
      }
    } else {
      // if no type is set give default
      if(type !== 1 && type !== 2 && type !== 3 && type !== 4) {
        if($ConLogShowColors) {
          console.log(`\x1b[34m%s\x1b[0m`, type)
        } else {
          console.log(type)
        }
      }
    }
  }
}

module.exports = ConLog