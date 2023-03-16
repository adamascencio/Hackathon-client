'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Progresses', // table name
        'stars', // new field name
        {
          type: Sequelize.INTEGER,
          defaultValue: 3
        },
      ),
      queryInterface.addColumn(
        'Progresses', // table name
        'xp', // new field name
        {
          type: Sequelize.INTEGER,
          defaultValue: 100
        }
      ),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Progresses', 'stars'),
      queryInterface.removeColumn('Progresses', 'xp')
    ]);
  }
};
