"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("WorkshopTickets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ticketId: {
        type: Sequelize.STRING,
      },
      completed: {
        type: Sequelize.BOOLEAN,
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      guestId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      workshopId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      paymentTransactionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("workshopTickets");
  },
};
