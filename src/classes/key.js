'use strict';

const { Error, TypeError } = require('../errors');
const KeyBase = require("./keyBase");

class Key extends KeyBase {
    /**
     * @param {KeyOptions} options Options for the key class
     */
    constructor(options) {
        super(options)
            /**
             * The options for a key generation
             * @type {object}
             */

        // Object.defineProperty(this, 'options', { value: options });



        /**
         * The key length
         * @type {number}
         * @param args
         */
        this.keyLength = 50

        /**
         * Add numbers to the key generation
         * @type {boolean}
         */
        this.useNumbers = false

        /**
         * Add symbols to the key generation
         * @type {boolean}
         */
        this.useSymbols = false

        /**
         * Add caps to the key generation
         * @type {boolean}
         */
        this.useCaps = true

        /**
         * Add a prefix before the key generation
         * @type {string}
         * @example
         * prefix: "BA"
         */
        this.prefix = null

        /**
         * Add a prefix separator character before the key generation
         * @type {string}
         * @example
         * prefixSeparationChar: "_"
         */
        this.prefixSeparationChar = null

        this.validateOptions(options);


    }

    /**
     * Generates a key with specified parameters in the
     * @return {string} A string with mixed characters
     */
    gen() {
        var charChain = "abcdefghijklmnopqrstuvwxyz"
        var key = ""
        if (this.useNumbers) {
            charChain += "0123456789"
        }
        if (this.useSymbols) {
            charChain += "`~!@#$%^&*()–_=+[]{}|;:‘“,./<>?" // missing \
        }
        if (this.useCaps) {
            charChain += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        for (var i = 0, n = charChain.length; i < this.keyLength; ++i) {
            key += charChain.charAt(Math.floor(Math.random() * n));
        }
        if (this.prefix) {
            key = this.prefix + this.prefixSeparationChar + key;
        }
        return key;
    }

    /**
     * Validates the key options.
     * @param {KeyOptions} [options=this.options] Options to validate
     * @private
     */
    validateOptions() {
        if (typeof this.keyLength !== "number" || isNaN(this.keyLength) || this.keyLength < 1) {
            throw new TypeError('KEY_INVALID_OPTION', 'keyLength', 'a number greater than or equal to 1');
        }
        if (typeof this.useNumbers !== "boolean") {
            throw new TypeError('KEY_INVALID_OPTION', 'useNumbers', 'a boolean');
        }
        if (typeof this.useSymbols !== "boolean") {
            throw new TypeError('KEY_INVALID_OPTION', 'useSymbols', 'a boolean');
        }
        if (typeof this.useCaps !== "boolean") {
            throw new TypeError('KEY_INVALID_OPTION', 'useCaps', 'a boolean');
        }
        if (this.prefix !== null && typeof this.prefix !== "string") {
            throw new TypeError('KEY_INVALID_OPTION', 'prefix', 'a string');
        }
        if (typeof this.prefixSeparationChar !== "undefined" && typeof this.prefix == "string") {
            throw new TypeError('KEY_INVALID_OPTION', 'prefixSeparationChar', 'a string');
        }

    }
}

module.exports = Key;
// new Key().gen()