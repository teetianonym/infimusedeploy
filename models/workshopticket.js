"use strict";

module.exports = (sequelize, DataTypes) => {
  const WorkshopTicket = sequelize.define(
    "WorkshopTicket",
    {
      ticketId: DataTypes.STRING,
      completed: DataTypes.BOOLEAN,
    },
    {}
  );

  return WorkshopTicket;
};

// WorkshopTicket.belongsTo(models.Customer, { foreignKey: "customerId" });
// WorkshopTicket.belongsTo(models.Guest, { foreignKey: "guestId" });
// WorkshopTicket.belongsTo(models.Workshop, { foreignKey: "workshopId" });
// WorkshopTicket.belongsTo(models.PaymentTransaction, {foreignKey: "paymentTransactionId"});
