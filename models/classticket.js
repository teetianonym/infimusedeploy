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
  },
  {}
);

ClassTicket.associate = (models) => {
  ClassTicket.belongsTo(models.Customer, { foreignKey: "customerId" });
};

module.exports = ClassTicket;
