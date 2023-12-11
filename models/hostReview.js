module.exports = (sequelize, DataTypes) => {
  const HostReview = sequelize.define(
    "hostReview",
    {
      content: DataTypes.STRING,
      rating: DataTypes.INTEGER,
    },
    { timestamps: true }
  );

  return HostReview;
};
