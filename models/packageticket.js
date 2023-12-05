"use strict";
const { DataTypes } = require("sequelize");
const db = require("../config/db");
const PackageTicket = db.define(
  "PackageTicket",
  {
    ticketId: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    numberOfSession: DataTypes.INTEGER,
    packageSessionList: DataTypes.ARRAY,
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    guestId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);
PackageTicket.associate = function (models) {
  PackageTicket.belongsTo(models.Customer, { foreignKey: "customerId" });
  PackageTicket.belongsTo(models.Guest, { foreignKey: "guestId" });
};
module.exports = PackageTicket;
