# `ConLog()` console log management and utility tool
### ![dependencies](https://badgen.net/static/dependencies/0/green?cache-control=no-cache) <sup>👈🥳</sup> ![npm v](https://badgen.net/npm/v/@codump/conlog?cache-control=no-cache) ![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clones&cache-control=no-cache&query=count&url=https://gist.githubusercontent.com/kipBO/6d2bb29f973d5b61cae5b6c3b174f8bf/raw/clone.json&logo=github) ![npm downloads](https://badgen.net/npm/dt/@codump/conlog?cache-control=no-cache) ![last commit](https://badgen.net/github/last-commit/codump/conlog?cache-control=no-cache) 

## Run `npm i @codump/conlog`

> [!IMPORTANT]
> We just released v2.0.3. Do note it has some breaking changes if you used previous v1.x.x.

## Minimal to go:
```js
const { ConLog, ConLogStartMsg } = require('@codump/conlog')

/**
 * This is so minimal you can even remove it, just do that *after* setting things up.
 * Otherwise the startup message (that shows your settings) won't appear.
 * You can also drop ConLogStartMsg from the import if you don't need it.
 */
ConLogStartMsg(true)

/**
 * And here's the core feature:
 * ConLog() that's it, that simple!
 */
ConLog('Confirm! Type 2 => ok in console', 2)

/**
 * Okay I trolled a bit earlier, the real minimal example is even shorter.
 * But we’re looking out for newcomers here so please forgive me
 * Cliffhanger... maybe next time we'll throw in syntax highlighting for objects 🤞
 */
```

## For real this time:
```js
const { ConLog } = require(`@codump/conlog`)

ConLog(`Sorry! Hope I didn't upset you again with an error!?`, 1);
```

## How to use in frontend:
`ConLog()` works in both back- and frontend. We can use the ESM>CDN to import it to the front with zero install needed! Browser needs to support ES6. 
```js
// script.js
import { ConLog } from `https://esm.sh/@codump/conlog`

ConLog(`It's the same as in the backend, all details are below.`, 2);
```
Make sure the script where you are importing it has the module type.
```html
<script type='module' src='script.js'></script>
```

## Let's check the full details:
```js
/**
 * ConLog - Console log management and utility tool
 * 
 * In the repo example.js is set with require(`./lib/`) but copy paste the code below
 * when you use it after a `npm install @codump/conlog`
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

/ Error logging - displayed in red
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

// Simple logging - no special formatting, always displayed (unless ConLogInit is false)
ConLog(`Example... Processing user request...`)
```