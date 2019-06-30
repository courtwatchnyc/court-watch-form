import {Sequelize, Model, DataTypes} from 'sequelize';
const sequelize = require('../');

export class User extends Model {
    public id!: number;
    public username!: string;
    public password!: string;
  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    id: {
      type: new DataTypes.INTEGER, // you can omit the `new` but this is discouraged
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'uers',
  });