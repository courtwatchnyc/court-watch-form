import {Sequelize, DataTypes} from 'sequelize';
export const db = new Sequelize('postgres://localhost:5432/courtwatch_nyc');

export const User = db.define('user', {
    username: {
        type: new DataTypes.STRING,
    },
    password: {
        type: new DataTypes.STRING,
    }
})