"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const dataUsers = [
      {
        name: "Ivan",
        email: "ivan@gmail.ru",
        password: "123"
      },
      {
        name: "bob",
        email: "bobfarmer@gmail.com",
        password: "123"
      },
    ];
    const users = dataUsers.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Users", users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Users");
  },
};
