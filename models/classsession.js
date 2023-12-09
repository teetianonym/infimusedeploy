"use strict";

module.exports = (sequelize, DataTypes) => {
  const ClassSession = sequelize.define(
    "classSession",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      posterUrl: DataTypes.STRING,
      date: DataTypes.DATE,
      startTime: DataTypes.TIME,
      endTime: DataTypes.TIME,
      capacity: DataTypes.INTEGER,
      fullCapacity: DataTypes.INTEGER,
      capacityStatus: DataTypes.INTEGER,
      price: DataTypes.DOUBLE,
      ageGroup: DataTypes.STRING,
      ageMin: DataTypes.INTEGER,
      ageMax: DataTypes.INTEGER,
    },
    {}
  );
  return ClassSession;
};

// ClassSession.hasMany(models.ClassTicket);
// ClassSession.hasMany(models.Location);
// ClassSession.hasOne(models.Waitlist, { foreignKey: "waitlistID" });
// ClassSession.belongsTo(models.Host, { foreignKey: "hostId" });
