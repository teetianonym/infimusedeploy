'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workshop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Workshop.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    posterUrl: DataTypes.STRING,
    duration: DataTypes.TIME,
    capacity: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    capacityStatus: DataTypes.BOOLEAN,
    ageGroup: DataTypes.STRING,
    ageMin: DataTypes.INTEGER,
    ageMax: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Workshop',
  });
  return Workshop;
};