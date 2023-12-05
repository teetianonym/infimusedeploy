"use strict";
const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Payout = db.define(
  "Payout",
  {
    amount: {
      type: DataTypes.DOUBLE,
    },
    paymentMethod: {
      type: DataTypes.STRING,
    },
    paymentStatus: {
      type: DataTypes.BOOLEAN,
    },
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {}
);
Payout.associate = (models) => {
  Payout.belongsTo(models.Host, { foreignKey: "hostId" });
};
module.exports = Payout;
