"use strict";
const { DataTypes } = require("sequelize");
const db = require("./../config/db");

const ClassSession = db.define(
  "ClassSession",
  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    posterUrl: DataTypes.STRING,
    date: DataTypes.DATE,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    capacity: DataTypes.INTEGER,
    capacityStatus: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    ageGroup: DataTypes.STRING,
    ageMin: DataTypes.INTEGER,
    ageMax: DataTypes.INTEGER,
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    waitlistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);
ClassSession.associate = function (models) {
  ClassSession.hasMany(models.ClassTicket);
  ClassSession.hasMany(models.Location);
  ClassSession.hasOne(models.Waitlist, { foreignKey: "waitlistID" });
  ClassSession.belongsTo(models.Host, { foreignKey: "hostId" });
};
module.exports = ClassSession;
