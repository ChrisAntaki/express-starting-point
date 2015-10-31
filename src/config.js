'use strict'

try {
    const config = require('../config');
    for (let key in config) {
        process.env[key] = config[key];
    }
} catch (e) {}
