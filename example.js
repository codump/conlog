// @ts-check

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
 * 
 * @param {boolean} error - Display error messages (type 1)
 * @param {boolean} ok - Display success/OK messages (type 2)  
 * @param {boolean} warning - Display warning messages (type 3)
 * @param {boolean} object - Display object dumps (type 4)
 * @param {boolean} color - Enable colored console output
 * 
 */
ConLogSet({error: true, ok: true, warning: true, object: true, color: true})


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
 *   - Gives a stringify to the output. Don't set any type if you want to log the raw object. 
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
ConLog(`Example... Database connection failed.`, 1)
ConLog(`Example... Invalid user credentials provided.`, `error`)

// Success logging - displayed in green
ConLog(`Example... User successfully authenticated.`, 2)
ConLog(`Example... File upload completed.`,`ok`)

// Warning logging - displayed in yellow with warning icon
ConLog(`Example... API rate limit approaching.`, 3)
ConLog(`Example... Deprecated function usage detected.`, `warning`)

// Object logging - formatted JSON display
ConLog(complexObject, 4)
ConLog({ userId: 123, status: `active`, permissions: [`read`, `write`] }, `object`)
// Object logging - unformatted
ConLog(complexObject)

// Simple logging - no special formatting, always displayed (unless ConLogInit is false)
ConLog(`Example... Processing user request...`)