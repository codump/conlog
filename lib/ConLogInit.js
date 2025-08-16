/**
 * @param {boolean} status - true = show console logs / false = hide console logs
 */ 

const ConLogInit = (status) => {
  global.$ConLogActive = status
}

module.exports = ConLogInit