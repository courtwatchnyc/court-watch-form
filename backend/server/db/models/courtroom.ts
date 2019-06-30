import {Sequelize, DataTypes} from 'sequelize';
const db = require('../');

export const Charge = db.define('charge', {
    name: {
        type: new DataTypes.STRING
    },
})