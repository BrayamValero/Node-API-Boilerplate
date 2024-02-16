"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Permissions", [
      {
        name: "view-todos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "add-todos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "edit-todos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "delete-todos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Permissions", null, {});
  },
};
