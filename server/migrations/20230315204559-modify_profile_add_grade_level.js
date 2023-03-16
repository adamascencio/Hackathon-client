'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Profiles', // table name
        'gradeLevel', // new field name
        {
          type: Sequelize.INTEGER,
          validate: {
            min: 0,
            max: 6
          }
        },
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Profiles', 'gradeLevel'),
    ]);
  }
};
