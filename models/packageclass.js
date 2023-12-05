"use strict";
const { DataTypes } = require("sequelize");
const db = require("../config/db");

const PackageClass = db.define(
  "PackageClass",
  {
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
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);
PackageClass.associate = function (models) {
  PackageClass.belongsTo(models.Host, { foreignKey: "hostId" });
};
module.exports = PackageClass;
