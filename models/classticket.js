"use strict";

module.exports = (sequelize, DataTypes) => {
  const ClassTicket = sequelize.define(
    "ClassTicket",

    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      ticketId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ticketStatus: {
        type: DataTypes.ENUM,
        values: ["COMPLETE", "CANCELED", "ACTIVE", "REFUND"],
      },
    },
    {}
  );

  return ClassTicket;
};
//   ClassTicket.belongsTo(models.Customer, { foreignKey: "customerId" });
// ClassTicket.belongsTo(models.ClassTicket, { foreignKey: "classTicketId" });
// ClassTicket.belongsTo(models.Guest, { foreignKey: "guestId" });
// ClassTicket.belongsTo(models.PaymentTransaction, {foreignKey: "paymentTransactionId",});
