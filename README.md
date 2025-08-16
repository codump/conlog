# `ConLog()` console log management and utility tool
### ![dependencies](https://badgen.net/static/dependencies/0/green) <sup>👈🥳</sup> ![npm v](https://badgen.net/npm/v/@codump/conlog) ![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clones&query=count&url=https://gist.githubusercontent.com/kipBO/6d2bb29f973d5b61cae5b6c3b174f8bf/raw/clone.json&logo=github) ![npm downloads](https://badgen.net/npm/dt/@codump/conlog) 

## Run `npm install @codump/conlog`

## Minimal to go:
```js
const { ConLog, ConLogStartMsg } = require(`@codump/conlog`)
/**
 * It's so minimal that you can remove this, but do it after your settings
 * Because the start message that shows your settings will vanish 
 * You can also remove the ConLogStartMsg function from the require
 */
ConLogStartMsg(true)
/**
 * Here's the `core` feature ConLog() it's that easy!
 */
ConLog(2, `Confirm! Type 2 => ok in console`);
/**
 * Sorry for the troll, the real minimal is below but we need to take care of the newbies
 * Cliffhanger... Might add some syntax highlighter to object...🤞
 */
```

## For real this time:
```js
const { ConLog } = require(`@codump/conlog`)

ConLog(1, `Sorry! Hope I didn't upset you again with an error!?`);
```

## Let's check the full deal:
```js
/**
 * ConLog - Console log management and utility tool
 * 
 * In the repo example.js it's set to require(`./lib/`) but copy paste the code below
 */
const { ConLogInit, ConLogSet, ConLog, ConLogStartMsg } = require(`@codump/conlog`)

// ================================
// INITIALIZATION
// ================================

/**
 * Initialize ConLog with global enable/disable setting
 * 
 * @param {boolean} status - Master switch for all console logging
 *   - true: Enable all ConLog output (default)
 *   - false: Completely disable all ConLog output
 *   - Every ConLog after ConLogInit(false) stops working
 */
ConLogInit(true)

// ================================
// CONFIGURATION
// ================================

/**
 * Configure which log types are displayed
 * All parameters default to true, so you only need to specify false values
 * When you want to set a value to false, you need to set all parameters in the function
 * 
 * @param {boolean} showErrors - Display error messages (type 1)
 * @param {boolean} showSuccess - Display success/OK messages (type 2)  
 * @param {boolean} showWarnings - Display warning messages (type 3)
 * @param {boolean} showObjects - Display object dumps (type 4)
 * @param {boolean} showColors - Enable colored console output
 * 
 * ConLogSet(showErrors, showSuccess, showWarnings, showObjects, showColors);
 */
ConLogSet(true, true, true, true, true)

/**
 * Display startup message showing current ConLog settings
 * Useful for debugging or confirming ConLog is properly initialized
 * 
 * @param {boolean} status - Whether to display startup message (default: false)
 */
ConLogStartMsg(true)

// ================================
// LOGGING EXAMPLES
// ================================

/**
 * Main logging function - ConLog(text, type)
 * 
 * TYPE OPTIONS:
 * - Error:   1, `er`, `err`, `error`
 * - Success: 2, `ok` 
 * - Warning: 3, `wa`, `war`, `warn`, `warning`
 * - Object:  4, `so`, `ob`, `obj`, `object`, `showobject`
 * 
 * USAGE:
 * - ConLog(text, type) - Typed logging with formatting
 * - ConLog(text) - Simple logging without type (always displayed unless ConLogInit is false)
 */

// Sample data for object logging
const nestedData = [{ nestedObj: `inside nested structure` }]
const complexObject = [{ 
    test: `valid test data`, 
    nested: nestedData,
    timestamp: new Date().toISOString()
}];

// Error logging - displayed in red
ConLog(1, `Example... Database connection failed.`)
ConLog(`error`, `Example... Invalid user credentials provided.`)

// Success logging - displayed in green
ConLog(2, `Example... User successfully authenticated.`)
ConLog(`ok`, `Example... File upload completed.`)

// Warning logging - displayed in yellow with warning icon
ConLog(3, `Example... API rate limit approaching.`)
ConLog(`warning`, `Example... Deprecated function usage detected.`)

// Object logging - formatted JSON display
ConLog(4, complexObject)
ConLog(`object`, { userId: 123, status: `active`, permissions: [`read`, `write`] })

// Simple logging - no special formatting, always displayed (unless ConLogInit is false)
ConLog(`Example... Processing user request...`)
```