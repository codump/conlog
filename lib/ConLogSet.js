/**
 * Configure which log types are displayed.
 * All parameters default to true, so you only need to specify false values.
 * 
 * @param {object} options - Configuration options
 * @param {boolean} [options.error=true] - Display error messages (type 1)
 * @param {boolean} [options.ok=true] - Display success/OK messages (type 2)  
 * @param {boolean} [options.warning=true] - Display warning messages (type 3)
 * @param {boolean} [options.object=true] - Display object dumps (type 4)
 * @param {boolean} [options.color=true] - Enable colored console output
 * @returns {void}
 * 
 * @example ConLogSet({error: false, ok: false, warning: false, object: false, color: false})
 * 
 */

function ConLogSet(options) {
  if(options.error !== undefined) {
    global.$ConLogShowErr = options.error
  }
  if(options.ok !== undefined) {
    global.$ConLogShowOk = options.ok
  }
  if(options.warning !== undefined) {
    global.$ConLogShowWar = options.warning
  }
  if(options.object !== undefined) {
    global.$ConLogShowObject = options.object
  }
  if(options.color !== undefined) {
    global.$ConLogShowColors = options.color
  }
}

module.exports = ConLogSet