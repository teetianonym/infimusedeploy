"use strict";
const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Location = db.define(
  "Location",
  {
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
    location: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    workshopId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    packageClassId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    classSessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);

Location.associate = function (models) {
  Location.belongsTo(models.Workshop, { foreignKey: "workshopId" });
  Location.belongsTo(models.PackageClass, { foreignKey: "packageClassId" });
  Location.belongsTo(models.ClassSession, { foreignKey: "classSessionId" });
};
module.exports = Location;
