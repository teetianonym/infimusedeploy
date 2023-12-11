"use strict";

module.exports = (sequelize, DataTypes) => {
  const Workshop = sequelize.define(
    "workshop",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      posterUrl: DataTypes.STRING,
      duration: DataTypes.TIME,
      capacity: DataTypes.INTEGER,
      price: DataTypes.DOUBLE,
      capacityStatus: DataTypes.BOOLEAN,
      fullCapacity: DataTypes.INTEGER,
      ageGroup: DataTypes.STRING,
      ageMin: DataTypes.INTEGER,
      ageMax: DataTypes.INTEGER,
    },
    {}
  );

  return Workshop;
};

// Workshop.hasMany(models.Location, { foreignKey: "workshopId" });
