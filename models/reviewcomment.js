'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReviewComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReviewComment.init({
    content: DataTypes.STRING,
    rating: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ReviewComment',
  });
  return ReviewComment;
};