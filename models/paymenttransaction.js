'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaymentTransaction.init({
    amount: DataTypes.DOUBLE,
    paymentMethod: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PaymentTransaction',
  });
  return PaymentTransaction;
};