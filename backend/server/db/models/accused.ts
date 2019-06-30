import {Sequelize, DataTypes} from 'sequelize';
const db = require('../');

export const Accused = db.define('accused', {
    gender: {
        type: new DataTypes.ENUM('M', 'F', 'GNC', 'TM', 'TF')
    },
    race: {
        type: new DataTypes.ENUM('B', 'L', 'W', 'NA', 'SA', 'EA')
    },
    age: {
        type: new DataTypes.ENUM('16-24', '25-34', '35-44', '45-54', '55+')
    }
})