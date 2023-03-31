'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.createTable('users', {
         id: {
          alowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
         username: {
          alowNull: false,
          type: Sequelize.STRING,
         },
         role: {
          alowNull: false,
          type: Sequelize.STRING,
         },
         email: {alowNull: false,
          type: Sequelize.STRING,
        },
         password: {
          alowNull: false,
          type: Sequelize.STRING,
         },
        });
     
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.dropTable('users');
     
  }
};
