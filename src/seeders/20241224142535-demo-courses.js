'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      {
        title: 'Express API',
        description: 'API Course with Express and MongoDB',
        start_date: '2023-01-01',
        category_id: 1,
        teacher_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'SpringBoot',
        description: 'Java Course with Spring Framework',
        start_date: '2023-01-01',
        category_id: 2,
        teacher_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Python Web with Django',
        description: 'Web Applications Course with Django',
        start_date: '2023-01-01',
        category_id: 3,
        teacher_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Object Orientation with C#',
        description: 'C# Course: Collections, Files and Libraries',
        start_date: '2023-01-01',
        category_id: 4,
        teacher_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
