"use strict";
module.exports = (sequelize, DataTypes) => {
  const PaymentTransaction = sequelize.define(
    "paymentTransaction",
    {
      amount: DataTypes.DOUBLE,
      paymentMethod: DataTypes.STRING,
    },
    {}
  );
  return PaymentTransaction;
};

// PaymentTransaction.belongsTo(models.Customer, { foreignKey: "customerId" });
// PaymentTransaction.belongsTo(models.Guest, { foreignKey: "guestId" });
// PaymentTransaction.hasOne(models.PackageTicket, {
//   foreignKey: "packageTicketId",
// });
// PaymentTransaction.hasMany(models.ClassTicket);
// PaymentTransaction.hasMany(models.WorkshopTicket);
