import {Sequelize, DataTypes} from 'sequelize';
const db = require('../');

export const Bail = db.define('bail', {
    notes: {
        type: new DataTypes.TEXT
    },
})