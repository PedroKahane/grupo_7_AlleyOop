'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable("entrega_compra", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      direccion:{
          type: Sequelize.STRING
      },
      provincia:{
          type: Sequelize.STRING
      },
      localidad:{
          type: Sequelize.STRING
      },
      codigo_postal:{
          type: Sequelize.INTEGER,
      },
      telefono:{
          type: Sequelize.INTEGER,
      },
      user_id:{
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
    }catch (error) {
      console.log(error)
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('entrega_compra');
  }
};
