"use strict";

module.exports = (sequelize, DataTypes) => {
  const PackageClass = sequelize.define(
    "packageClass",
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
  return PackageClass;
};
// PackageClass.belongsTo(models.Host, { foreignKey: "hostId" });
// PackageClass.hasMany(models.PackageTicket);
// PackageClass.hasOne(models.Waitlist, { foreignKey: "waitlistId" });
// PackageClass.hasMany(models.PackageSession);
