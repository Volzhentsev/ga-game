'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const dataThemes = [
      {
        title: "ВВП"
      },
      {
        title: "Космос",
      },
      {
        title: "Логика",
      },
    ];
    const themes = dataThemes.map((theme) => ({
      ...theme,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Themes", themes);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Themes");
  },
};
