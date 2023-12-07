"use strict";

module.exports = (sequelize, DataTypes) => {
  const PackageTicket = sequelize.define(
    "packageTicket",
    {
      ticketId: DataTypes.STRING,
      completed: DataTypes.BOOLEAN,
      numberOfSession: DataTypes.INTEGER,
      packageSessionList: DataTypes.TEXT,
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
