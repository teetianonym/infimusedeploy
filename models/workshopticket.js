"use strict";

module.exports = (sequelize, DataTypes) => {
  const WorkshopTicket = sequelize.define(
    "WorkshopTicket",
    {
      ticketId: DataTypes.STRING,
      ticketStatus: {
        type: DataTypes.ENUM,
        values: ["COMPLETE", "CANCELED", "ACTIVE", "REFUND"],
      },
    },
    { timestamps: false }
  );

  return WorkshopTicket;
};

// WorkshopTicket.belongsTo(models.Customer, { foreignKey: "customerId" });
// WorkshopTicket.belongsTo(models.Guest, { foreignKey: "guestId" });
// WorkshopTicket.belongsTo(models.Workshop, { foreignKey: "workshopId" });
// WorkshopTicket.belongsTo(models.PaymentTransaction, {foreignKey: "paymentTransactionId"});
