
/**
 * @param {(number|string)} type - 1|er|err|error / 2|ok / 3|wa|war|warn|warning / 4|so|ob|obj|object|showobject
 * @param {(string|object)} text - text or object to display
 */
const ConLog = (type, text) => {
  if(_ConLogActive) {
    // set type based on param value to number
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

    if(type === 1 && _ConLogShowErr){ // if type = error
      if(_ConLogShowColors) {
        console.log('\x1b[41m%s\x1b[37m\x1b[0m',`Error: ${text}`);
      } else {
        console.log(`Error: ${text}`);
      }
    } else // if type = ok
    if(type === 2 && _ConLogShowOk){
      if(_ConLogShowColors) {
        console.log('\x1b[32m%s\x1b[0m', `OK: ${text}`);
      } else {
        console.log(`OK: ${text}`);
      }
    } else // if type = warning
    if(type === 3 && _ConLogShowWar){
      if(_ConLogShowColors) {
        console.log('\x1b[43m%s\x1b[30m\x1b[0m',`Warning: ${text}`);
      } else {
        console.log(`Warning: ${text}`);
      }
    } else // if type = showobject
    if(type === 4 && _ConLogShowObject){
      text = JSON.stringify(text, null, 2);
      if(_ConLogShowColors) {
        console.log('\x1b[36m%s\x1b[0m', `Object: ${text}`);
      } else {
        console.log(`Object: ${text}`);
      }
    } else {
      // if no type is set give default OK
      if(type !== 1 && type !== 2 && type !== 3 && type !== 4) {
        if(_ConLogShowColors) {
          console.log('\x1b[34m%s\x1b[0m', `${type}`);
        } else {
          console.log(`${type}`);
        }
      }
    }
  }
}

module.exports = ConLog;