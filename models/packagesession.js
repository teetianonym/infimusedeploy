"use strict";
module.exports = (sequelize, DataTypes) => {
  const PackageSession = sequelize.define(
    "packageSession",
    {
      startTime: DataTypes.STRING,
      endTime: DataTypes.STRING,
      capacity: DataTypes.INTEGER,
      date: DataTypes.DATE,
    },
    {}
  );

  return PackageSession;
};

// PackageSession.belongsTo(models.PackageClass, {
// foreignKey: "packageClassId",
