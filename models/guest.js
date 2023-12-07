"use strict";

module.exports = (sequelize, DataTypes) => {
  const Guest = sequelize.define(
    "guest",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {}
  );

  return Guest;
};
