const { DataTypes } = require("sequelize");
const db = require("./../config/db");

const Waitlist = db.define(
  "WaitList",
  {
    email: { type: DataTypes.STRING, unique: true },
    classSessionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    workshopId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    packageClassId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {}
);
Waitlist.associate = (models) => {
  Waitlist.belongsTo(models.ClassSession, { foreignKey: "classSessionId" });
  Waitlist.belongsTo(models.Workshop, { foreignKey: "workshopId" });
  Waitlist.belongsTo(models.PackageClass, { foreignKey: "packageClassId" });
};

module.exports = Waitlist;
