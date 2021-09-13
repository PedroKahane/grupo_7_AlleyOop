'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable("product_talles", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      product_id: {
        type: Sequelize.BIGINT(10),
        foreignKey: true
      },
      talles_id: {
        type: Sequelize.BIGINT(10),
        foreignKey: true
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
    } catch (error) {
      
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product_talles');
  }
};
