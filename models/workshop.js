"use strict";
const { DataTypes } = require("sequelize");
const db = require("./../config/db");

const Workshop = db.define(
  "Workshop",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    posterUrl: DataTypes.STRING,
    duration: DataTypes.TIME,
    capacity: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    capacityStatus: DataTypes.BOOLEAN,
    ageGroup: DataTypes.STRING,
    ageMin: DataTypes.INTEGER,
    ageMax: DataTypes.INTEGER,
    HostId: DataTypes.INTEGER,
  },
  {}
);
Workshop.associate = function (models) {
  Workshop.hasMany(models.WorkshopClass);
  Workshop.belongsTo(models.Host, { foreignKey: "hostId" });
};

module.exports = Workshop;
