/**
 * @param {boolean} status - true = show console logs / false = hide console logs
 */

const ConLogInit = (status) => {
  global._ConLogActive = status
}

module.exports = ConLogInit;