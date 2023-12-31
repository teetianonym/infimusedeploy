"use strict";

module.exports = (sequelize, DataTypes) => {
  const PackageTicket = sequelize.define(
    "packageTicket",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      ticketId: DataTypes.STRING,
      completed: DataTypes.BOOLEAN,
      numberOfSession: DataTypes.INTEGER,
      ticketStatus: {
        type: DataTypes.ENUM,
        values: ["COMPLETE", "CANCELED", "ACTIVE", "REFUND"],
      },
    },
    {}
  );

  return PackageTicket;
};

// PackageTicket.belongsTo(models.Customer, { foreignKey: "customerId" });
// PackageTicket.belongsTo(models.PackageClass, {
//   foreignKey: "packageClassId",
// });
// PackageTicket.belongsTo(models.Guest, { foreignKey: "guestId" });
// PackageTicket.belongsTo(models.PaymenTransaction, {
//   foreignKey: "paymentTransactionId",
// });
