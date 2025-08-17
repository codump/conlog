/**
 * 
 * @param {object} options - Configuration options
 * @param {boolean} [options.error=true] - Show errors
 * @param {boolean} [options.ok=true] - Show ok messages
 * @param {boolean} [options.warning=true] - Show warnings
 * @param {boolean} [options.object=true] - Show objects
 * @param {boolean} [options.color=true] - Show colors
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