"use strict";
const { DataTypes } = require("sequelize");
const db = require("../config/db");
const ReviewComment = db.define(
  "ReviewComment",
  {
    content: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);
ReviewComment.associate = (models) => {
  ReviewComment.belongsTo(models.Host, { foreignKey: "hostId" });
};
module.exports = ReviewComment;
