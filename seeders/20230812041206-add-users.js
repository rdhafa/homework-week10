"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "squarepants@mail.com",
          gender: "square",
          password: "gary123",
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "tentacles@mail.com",
          gender: "squid",
          password: "clarinet",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "star@mail.com",
          gender: "star",
          password: "rock",
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
