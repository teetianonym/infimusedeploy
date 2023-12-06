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
    guestId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    packageTicketId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);
PaymentTransaction.associate = function (models) {
  PaymentTransaction.belongsTo(models.Customer, { foreignKey: "customerId" });
  PaymentTransaction.belongsTo(models.Guest, { foreignKey: "guestId" });
  PaymentTransaction.hasOne(models.PackageTicket, {
    foreignKey: "packageTicketId",
  });
  PaymentTransaction.hasMany(models.ClassTicket);
  PaymentTransaction.hasMany(models.WorkshopTicket);
};
module.exports = PaymentTransaction;
