"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Movies",
      [
        {
          title: "Pixels",
          genres: "Comedy|Sci-Fi",
          year: "2015",
          photo: "pixels.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Forrest Gump",
          genres: "Drama|Romance",
          year: "1994",
          photo: "forrestgump.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Comic 8",
          genres: "Action|Comedy",
          year: "2014",
          photo: "comic8.jpg",
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
    await queryInterface.bulkDelete("Movies", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
