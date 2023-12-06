const { Datatypes } = require("sequelize");
const db = require("./../config/db");

const Waitlist = db.define(
  "Waitlist",
  {
    email: DataTypes.STRING,
    classSessionId: {
      type: Datatypes.INTEGER,
    },
    workshopId: {
      type: Datatypes.INTEGER,
    },
    packageClassId: {
      type: Datatypes.INTEGER,
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
