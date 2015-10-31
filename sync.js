'use strict'

// Modules
const models = require('./src/models');

models.sequelize.sync().then(() => {
    console.log('Synced');
    process.exit();
});
