"use strict";
const { DataTypes } = require("sequelize");
const db = require("../config/db");

const PackageSession = db.define(
  "PackageSession",
  {
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    date: DataTypes.DATE,
    packageClassId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);
PackageSession.associate = function (models) {
  PackageSession.belongsTo(models.PackageClass, {
    foreignKey: "packageClassId",
  });
};
module.exports = PackageSession;
