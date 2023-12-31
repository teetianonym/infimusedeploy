"use strict";
module.exports = (sequelize, DataTypes) => {
  const Host = sequelize.define(
    "host",
    {
      bio: DataTypes.STRING,
      imageUrls: DataTypes.TEXT,
      qualifications: DataTypes.STRING,
      verified: DataTypes.BOOLEAN,
      hostTitle: {
        type: DataTypes.ENUM,
        values: ["INDIVIDUAL", "PROFESSIONAL", "BUSINESS"],
      },
      nationalId: DataTypes.INTEGER,
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
  return Host;
};

// Host.hasMany(models.ClassSession);
// Host.hasMany(models.PackageClass);
// Host.hasMany(models.Payout);
// Host.hasMany(models.Notification);
// Host.hasMany(models.ReviewComment);
