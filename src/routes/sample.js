'use strict'

// Modules
const urlParser = require('url').parse;

module.exports = {
    callback: (req, res) => {
        const params = urlParser(req.url, true).query;

        res.send(params);
    },
    method: 'get',
    url: '/api/v1/sample',
};
