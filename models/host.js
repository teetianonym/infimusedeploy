"use strict";
const { DataTypes } = require("sequelize");
const db = require("./../config/db");

const Host = db.define(
  "Host",
  {
    bio: DataTypes.STRING,
    imageUrls: DataTypes.TEXT,
    qualifications: DataTypes.STRING,
    specialization: DataTypes.STRING,
    experienceYears: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    resetPassword: DataTypes.STRING,
  },
  {}
);
Host.associate = function (models) {
  Host.hasMany(models.ClassSession);
  Host.hasMany(models.PackageClass);
  Host.hasMany(models.Payout);
  Host.hasMany(models.Notification);
  Host.hasMany(models.ReviewComment);
};

module.exports = Host;
