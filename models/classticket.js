"use strict";
const { DataTypes } = require("sequelize");
const db = require("./../config/db");

const ClassTicket = db.define(
  "ClassTicket",
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
    paymentTransactionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    classTicketId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);

ClassTicket.associate = (models) => {
  ClassTicket.belongsTo(models.Customer, { foreignKey: "customerId" });
  ClassTicket.belongsTo(models.ClassTicket, { foreignKey: "classTicketId" });
  ClassTicket.belongsTo(models.Guest, { foreignKey: "guestId" });
  ClassTicket.belongsTo(models.PaymentTransaction, {
    foreignKey: "paymentTransactionId",
  });
};

module.exports = ClassTicket;
