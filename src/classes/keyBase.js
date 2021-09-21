'use strict';

/**
 * Key model
 * @abstract
 */
class keyBase {
    constructor(keyBase) {
        /**
         * The client that instantiated this
         * @type {keyBase}
         * @readonly
         */
        Object.defineProperty(this, 'keyBase', { value: keyBase });
    }
}

module.exports = keyBase;