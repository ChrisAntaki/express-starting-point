'use strict'

// Modules
const Sequelize = require('sequelize');

let models = {};
let sequelize = models.sequelize = new Sequelize(process.env.DATABASE_URL, {
    // logging: false,
    define: {
        freezeTableName: true,
        underscored: true,
    },
});

models.Variable = sequelize.define(
    // Name
    'variable',

    // Fields
    {
        id: {
            autoIncrement: true,
            type: Sequelize.BIGINT,
            primaryKey: true,
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        value: {
            allowNull: false,
            type: Sequelize.STRING,
        },
    },

    // Options
    {
        indexes: [
            { fields: ['name'] },
            { fields: ['value'] },
        ],
    }
);

module.exports = models;
