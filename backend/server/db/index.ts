import {Sequelize, DataTypes} from 'sequelize';
export const sequelize = new Sequelize('postgres://localhost:5432/courtwatch_nyc', {
    logging: false
  });
