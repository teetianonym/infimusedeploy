"use strict";

module.exports = (sequelize, DataTypes) => {
  const ClassTicket = sequelize.define(
    "ClassTicket",
    {
      ticketId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      completed: DataTypes.BOOLEAN,
    },
    {}
  );

  return ClassTicket;
};
//   ClassTicket.belongsTo(models.Customer, { foreignKey: "customerId" });
// ClassTicket.belongsTo(models.ClassTicket, { foreignKey: "classTicketId" });
// ClassTicket.belongsTo(models.Guest, { foreignKey: "guestId" });
// ClassTicket.belongsTo(models.PaymentTransaction, {foreignKey: "paymentTransactionId",});
