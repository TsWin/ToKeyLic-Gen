'use strict';

const { register } = require('./moduleError');

const Messages = {
    KEY_INVALID_OPTION: (prop, must) => `The ${prop} option must be ${must}`,
}

for (const [name, message] of Object.entries(Messages)) register(name, message);