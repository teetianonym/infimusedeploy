"use strict";
const { DataTypes } = require("sequelize");
const db = require("../config/db");

WorkshopTicket = db.define(
  "WorkshopTicket",
  {
    ticketId: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    guestId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    workshopId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paymentTransactionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);
WorkshopTicket.associate(function (models) {
  WorkshopTicket.belongsTo(models.Customer, { foreignKey: "customerId" });
  WorkshopTicket.belongsTo(models.Guest, { foreignKey: "guestId" });
  WorkshopTicket.belongsTo(models.Workshop, { foreignKey: "workshopId" });
  WorkshopTicket.belongsTo(models.PaymentTransaction, {
    foreignKey: "paymentTransactionId",
  });
});
module.exports = WorkshopTicket;
