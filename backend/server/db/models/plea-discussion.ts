import {Sequelize, DataTypes} from 'sequelize';
const db = require('../');

export const PleaDiscussion = db.define('plea', {
    daSay: {
        type: new DataTypes.ENUM('Dismiss', 'No Offer or Recommendation', 'Offer/Recommendation')
    },
    offerRecommendation: {
        //fill options later
        type: new DataTypes.ENUM('fill me in')
    },
})