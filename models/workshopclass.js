"use strict";

module.exports = (sequelize, DataTypes) => {
  const WorkshopClass = sequelize.define(
    "workshopClass",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      date: DataTypes.DATE,
      startTime: DataTypes.STRING,
      endTime: DataTypes.STRING,
    },
    {}
  );
  return WorkshopClass;
};

//  WorkshopClass.belongsTo(models.Workshop, { foreignKey: "workshopId" });
