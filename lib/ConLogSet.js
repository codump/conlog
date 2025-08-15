/**
 * @param {boolean} err - true = show errors / false = hide errors
 * @param {boolean} ok - true = show ok / false = hide ok
 * @param {boolean} war - true = show warning / false = hide warning
 */

const ConLogSet = (err, ok, war, obj, color) => {
  global._ConLogShowErr = err;
  global._ConLogShowOk = ok;
  global._ConLogShowWar = war;
  global._ConLogShowObject = obj;
  global._ConLogShowColors = color;
}

module.exports = ConLogSet;