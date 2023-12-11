module.exports = (sequelize, DataTypes) => {
  const HostPaymentPlanTransaction = sequelize.define(
    "hostPaymentPlanTransaction",
    {
      amount: DataTypes.DOUBLE,
      duration: DataTypes.TIME,
      PaymentMethod: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      recur: DataTypes.BOOLEAN,
    }
  );
  return HostPaymentPlanTransaction;
};
