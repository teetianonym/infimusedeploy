'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Host extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Host.init({
    bio: DataTypes.STRING,
    imageUrls: DataTypes.ARRAY,
    qualifications: DataTypes.STRING,
    specialization: DataTypes.STRING,
    experienceYears: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    resetPassword: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Host',
  });
  return Host;
};