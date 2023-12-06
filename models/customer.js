const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

const Customer = db.define(
  "Customer",
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    resetPassword: DataTypes.STRING,
  },
  {}
);

Customer.associate = (models) => {
  Customer.hasMany(models.ClassTicket);
  Customer.hasMany(models.WorkShopTicket);
  Customer.hasMany(models.PackageTicket);
  Customer.hasMany(models.Notification);
  Customer.hasMany(models.PaymentTransaction);
};
module.exports = Customer;
