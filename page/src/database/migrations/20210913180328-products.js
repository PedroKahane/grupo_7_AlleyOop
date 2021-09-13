'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable("products", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      jugador: {
          type: Sequelize.STRING,
          allowNull: false
      },
      equipo: {
          type: Sequelize.STRING,
          allowNull: false
      },
      numero_camiseta: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      precio: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      descuento: {
          type: Sequelize.INTEGER,
      },
      imagen_frente: {
          type: Sequelize.STRING,
          allowNull: false
      },
      imagen_espalda: {
          type: Sequelize.STRING,
          allowNull: false
      },
      descripcion: {
          type: Sequelize.STRING,
          allowNull: false
      },
      destacado: {
          type: Sequelize.INTEGER,
      },
      colors_id: {
          type: Sequelize.INTEGER,
          allowNull: false
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

    await queryInterface.dropTable('products');
  }
};
