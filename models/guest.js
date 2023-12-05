"use strict";
const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Guest = db.define(
  "Guest",
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {}
);
Guest.associate = (models) => {
  Guest.hasMany(models.PaymentTransaction);
  Guest.hasMany(models.PackageTicket);
  Guest.hasMany(models.ClassTicket);
  Guest.hasMany(models.WorkshopTicket);
};
module.exports = Guest;
