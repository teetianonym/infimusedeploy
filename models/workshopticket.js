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
  },
  {}
);
WorkshopTicket.associate(function (models) {
  WorkshopTicket.belongsTo(models.Customer, { foreignKey: "customerId" });
});
module.exports = WorkshopTicket;
