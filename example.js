var { ConLogInit, ConLogStartMsg, ConLogSet, ConLog } = require('./lib/');

/**
 * Default is set to true.
 * ConLogInit(false) // True = Show console logs / False = No console logs.
 */
ConLogInit(true)

/**
 * By default everything is set to true, so you only need to set them when using false
 * ConLogSet(false, false, false, false, false) // True = show / False = hide: 1st param errors, 2nd param ok, 3rd param warning 4rd param object, 5th param colors
 * ConLog() with only 1 parameter set can only be disabled by turning ConLogInit to false.
 */
ConLogSet(true, true, true, true, true)

/**
 * By default ConLogStartMsg is already turned off with false, set to true if you want to check settings or want to be reassured ConLog is running on start up.  
 */
ConLogStartMsg(true)

/**
 * /**
 * @param {(number|string)} type - 1|er|err|error / 2|ok / 3|wa|war|warn|warning / 4|so|ob|obj|object|showobject
 * @param {(string|object)} text - text or object to display
 * ConLog(type, text) 1st param is type (1 = Error, 2 = OK, 3 = Warning, 4 = Show object) of log, 2nd param is text or object to display.
 * Example: ConLog(1, `This is an error message`) OR ConLog(`error`, `This is also an error message`)
 * If you only use 1 param the log will default to no type and will display the given value. 
 */
const objIobj = [{nestedObj: "sd"}]
const obj = [{test: "sd", nested: objIobj}]
ConLog(1, `text1`)
ConLog(2, `text2`)
ConLog(3, `text3`)
ConLog(4, obj)
ConLog(`no type defined`)