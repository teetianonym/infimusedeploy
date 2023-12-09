const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const HostPlan = sequelize.define("hostPlan", {
    name: DataTypes.STRING,
    classListing: DataTypes.INTEGER,
    workshopListing: DataTypes.INTEGER,
    packageListing: DataTypes.INTEGER,
  });
  return HostPlan;
};
