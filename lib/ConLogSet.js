/**
 * 
 * @param {object} options - Configuration options
 * @param {boolean} [options.error] - Show errors
 * @param {boolean} [options.ok] - Show ok messages
 * @param {boolean} [options.warning] - Show warnings
 * @param {boolean} [options.object] - Show objects
 * @param {boolean} [options.color] - Show colors
 */

const ConLogSet = (options) => {
  if(options.error !== undefined) {
    $ConLogShowErr = options.error
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