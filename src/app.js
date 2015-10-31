'use strict'

// Modules
const async = require('async');
const express = require('express');
const fs = require('fs');
const path = require('path');

// Instantiate
const app = express();
const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`Application is available at port ${port}`);
});

// Routes
const stash = {};
async.series([
    // Get filenames
    (next) => {
        fs.readdir(path.join(__dirname, 'routes'), (err, filenames) => {
            stash.filenames = filenames;
            next(err);
        });
    },

    // Add routes
    (next) => {
        async.each(stash.filenames, (filename, next) => {
            let route = require(`./routes/${filename}`);
            app[route.method](route.url, route.callback);
            next();
        }, next);
    },
], (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Added ${stash.filenames.length} route${stash.filenames.length > 1 ? 's' : ''}`);
    }
});

module.exports = app;
