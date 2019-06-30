import {Sequelize, DataTypes} from 'sequelize';
const db = require('../');

export const Judge = db.define('judge', {
    name: {
        type: new DataTypes.STRING,
    },
})