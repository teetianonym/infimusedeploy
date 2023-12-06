"use strict";
const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Notification = db.define(
  "Notification",
  {
    content: DataTypes.STRING,
    viewed: DataTypes.BOOLEAN,
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);
Notification.associate = (models) => {
  Notification.belongsTo(models.Host, { foreignKey: "hostId" });
  Notification.belongsTo(models.Customer, { foreignKey: "customerId" });
};
module.exports = Notification;
