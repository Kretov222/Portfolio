/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Appeals',
      [
        {
          authorName: 'Василий',
          description: 'Описание запроса',
          date: new Date(),
          status: 'В работе',
          type: 'Ошибка',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          authorName: 'Даниил',
          description: 'Описание запроса',
          date: new Date(),
          status: 'Ожидается',
          type: 'Готово',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
