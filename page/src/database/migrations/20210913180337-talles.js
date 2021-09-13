'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable("talles", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      nombre:{
          type: Sequelize.STRING,
          allowNull: false,
      },
      abreviatura:{
          type: Sequelize.STRING,
          allowNull: false,
      },
      createdAt:{
        type: Sequelize.DATE,
        defaultvalue: null,
      },
      updatedAt:{
        type: Sequelize.DATE,
        defaultvalue: null,
      }
  })
    }catch (error) {
      console.log(error)
    }
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('talles');
     
  }
};
