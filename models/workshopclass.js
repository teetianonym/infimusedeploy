"use strict";
const { DataTypes } = require("sequelize");
const db = require("./../config/db");

const WorkshopClass = db.define(
  "WorkshopClass",
  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    workshopId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);
WorkshopClass.associate = function (models) {
  WorkshopClass.belongsTo(models.Workshop, { foreignKey: "workshopId" });
};

module.exports = WorkshopClass;
