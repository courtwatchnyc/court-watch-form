import {Sequelize, DataTypes} from 'sequelize';
const db = require('../');

export const Charge = db.define('charge', {
    topCharge: {
        //fill in array of all charges later
        //create model method to populate charge type
        type: new DataTypes.ENUM('Y', 'N')
    },
    chargeType: {
        type: new DataTypes.ENUM('fill me in')
    },
    additionalCharges: {
        type: new DataTypes.ENUM('Y', 'N', 'Not Sure')
    },
    domesticViolence: {
        type: new DataTypes.ENUM('Y', 'N', 'Not Sure')
    },
    felony: {
        type: new DataTypes.ENUM('Y', 'N', 'Not Sure')
    },
    notes: {
        type: new DataTypes.TEXT
    },
})