/**
 * @param {boolean} showErrors - true = show errors / false = hide errors
 * @param {boolean} showSuccess - true = show ok / false = hide ok
 * @param {boolean} showWarnings - true = show warning / false = hide warning
 * @param {boolean} showObjects - true = show objects / false = hide objects
 * @param {boolean} showColors - true = show color / false = hide color
 */

const ConLogSet = (showErrors, showSuccess, showWarnings, showObjects, showColors) => {
  global.$ConLogShowErr = showErrors
  global.$ConLogShowOk = showSuccess
  global.$ConLogShowWar = showWarnings
  global.$ConLogShowObject = showObjects
  global.$ConLogShowColors = showColors
}

module.exports = ConLogSet