/**
 * Initialize console logging status
 * @param status - true = show console logs / false = hide console logs
 */
declare function ConLogInit(status: boolean): void;

/**
 * Configure console logging options
 * @param options - Configuration options
 * @param options.error - Show errors (default: true)
 * @param options.ok - Show ok messages (default: true) 
 * @param options.warning - Show warnings (default: true)
 * @param options.object - Show objects (default: true)
 * @param options.color - Show colors (default: true)
 */
declare function ConLogSet(options: {
  error?: boolean;
  ok?: boolean;
  warning?: boolean;
  object?: boolean;
  color?: boolean;
}): void;

/**
 * Log text with optional type formatting
 * @param text - You can log anything, not just text
 * @param type - Log type:
 *   - 1 | "error" | "er" | "err"
 *   - 2 | "ok"
 *   - 3 | "warning" | "wa" | "war" | "warn"
 *   - 4 | "showobject" | "so" | "ob" | "obj" | "object"
 */
declare function ConLog(text: any, type?: number | string): void;

/**
 * Control start message display
 * @param status - true = show start message / false = hide start message
 */
declare function ConLogStartMsg(status: boolean): void;

// Support both CommonJS destructuring and named exports
export { ConLogInit, ConLogSet, ConLog, ConLogStartMsg };

declare const _default: {
  ConLogInit: typeof ConLogInit;
  ConLogSet: typeof ConLogSet;
  ConLog: typeof ConLog;
  ConLogStartMsg: typeof ConLogStartMsg;
};

export = _default;