"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const dataResult = [
      {
        user_name: "Ivan",
        amount: 9999,
        user_id: 1,
      },
      {
        user_name: "bob",
        amount: 100,
        user_id: 2,
      },
    ];
    const results = dataResult.map((result) => ({
      ...result,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Results", results);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Results");
  },
};
