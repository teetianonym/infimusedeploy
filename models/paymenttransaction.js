"use strict";
const { DataTypes } = require("sequelize");
const db = require("../config/db");
const PaymentTransaction = db.define(
  "PaymentTransaction",
  {
    amount: DataTypes.DOUBLE,
    paymentMethod: DataTypes.STRING,
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);
PaymentTransaction.associate = function (models) {
  PaymentTransaction.belongsTo(models.Customer, { foreignKey: "customerId" });
};
module.exports = PaymentTransaction;
