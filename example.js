/**
 * ConLog - Console log management and utility tool
 * 
 * Replace this require statement with require(`@codump/conlog`) after installation or with usage
 */
const { ConLogInit, ConLogSet, ConLog, ConLogStartMsg } = require(`./lib/`)

// ================================
// INITIALIZATION
// ================================

/**
 * Initialize ConLog with global enable/disable setting
 * 
 * @param {boolean} status - Master switch for all console logging
 *   - true: Enable all ConLog output (default)
 *   - false: Completely disable all ConLog output
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
 * Main logging function - ConLog(type, message)
 * 
 * TYPE OPTIONS:
 * - Error:   1, `er`, `err`, `error`
 * - Success: 2, `ok` 
 * - Warning: 3, `wa`, `war`, `warn`, `warning`
 * - Object:  4, `so`, `ob`, `obj`, `object`, `showobject`
 * 
 * USAGE:
 * - ConLog(type, message) - Typed logging with formatting
 * - ConLog(message) - Simple logging without type (always displayed unless ConLogInit is false)
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