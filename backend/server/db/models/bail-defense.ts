import {Sequelize, DataTypes} from 'sequelize';
const db = require('../');

export const BailDefense = db.define('bail_defense', {
    bailType: {
        type: new DataTypes.ENUM('Cash', 'Bond', 'Other')
    },
    bailAmount: {
        type: new DataTypes.INTEGER
    },
    ROR: {
        type: new DataTypes.ENUM('Y', 'N')
    },
    remand: {
        type: new DataTypes.ENUM('Y', 'N')
    },
    supervisedRelease: {
        type: new DataTypes.ENUM('Y', 'N')
    },
    orderOfProtection: {
        //fill options later
        type: new DataTypes.ENUM('Full', 'Limited', 'None')
    },
})