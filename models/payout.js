"use strict";
module.exports = (sequelize, DataTypes) => {
  const Payout = sequelize.define(
    "payout",
    {
      amount: {
        type: DataTypes.DOUBLE,
      },
      paymentMethod: {
        type: DataTypes.STRING,
      },
      paymentStatus: {
        type: DataTypes.ENUM,
        values: ["PENDING", "COMPLETED", "FAILED", "REFUNDED"],
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {}
  );

  return Payout;
};

// Payout.belongsTo(models.Host, { foreignKey: "hostId" });
