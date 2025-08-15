/**
 * @param {boolean} status - true = show console log / false = hide console log
 */

const ConLogInit = (status) => {
  global._ConLogActive = status
}

module.exports = ConLogInit;