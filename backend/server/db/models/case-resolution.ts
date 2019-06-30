import {Sequelize, DataTypes} from 'sequelize';
const db = require('../');

export const CaseResolution = db.define('resolution', {
    resolve: {
        type: new DataTypes.ENUM('Y', 'N')
    },
    how: {
        type: new DataTypes.ENUM('Dismiss', 'Plea', 'Sentence')
    },
    pleaDetails: {
        //fill options later
        type: new DataTypes.ENUM('fill me in')
    },
    sentencingDetails: {
        //fill options later
        type: new DataTypes.ENUM('fill me in')
    },
})