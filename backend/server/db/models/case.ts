import {Sequelize, DataTypes} from 'sequelize';
const db = require('../');

export const Case = db.define('case', {
    borough: {
        type: new DataTypes.ENUM('Brooklyn', 'Queens', 'Bronx', 'Staten Island', 'Manhattan')
    },
    docketNumber: {
        type: new DataTypes.STRING
    },
    penalLaw: {
        type: new DataTypes.STRING
    },
    interpreterNeeded: {
        type: new DataTypes.ENUM('Y', 'N')
    },
    interpreterPresent: {
        type: new DataTypes.ENUM('Y', 'N')
    },
    duration: {
        //fill options later
        type: new DataTypes.ENUM('Under 2 Minutes', '2 - 5 Minutes', '5+ Minutes')
    },
    queensWaiverRightGrandJury: {
        //fill options later
        type: new DataTypes.ENUM('Y', 'N')
    },
})