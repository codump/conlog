/**
 * Initialize ConLog with global enable/disable setting.
 * 
 * @param {boolean} status - Master switch for all console logging
 *   - true: Enable all ConLog output (default)
 *   - false: Completely disable all ConLog output
 * @returns {void}
 */

function ConLogInit(status) {
  global.$ConLogActive = status
}

module.exports = ConLogInit