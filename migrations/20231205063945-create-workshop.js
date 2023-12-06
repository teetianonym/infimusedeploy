"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Workshops", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      posterUrl: {
        type: Sequelize.STRING,
      },
      duration: {
        type: Sequelize.TIME,
      },
      capacity: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.DOUBLE,
      },
      capacityStatus: {
        type: Sequelize.BOOLEAN,
      },
      ageGroup: {
        type: Sequelize.STRING,
      },
      ageMin: {
        type: Sequelize.INTEGER,
      },
      ageMax: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      HostId: { type: Sequelize.INTEGER, allowNull: false },
      waitlistId: Sequelize.INTEGER,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Workshops");
  },
};
