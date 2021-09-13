'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable("metodo_de_pago", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      metodo_de_pago:{
          type: Sequelize.STRING
      },
      numero_tarjeta:{
          type: Sequelize.INTEGER,
          defaultvalue: null
      },
      vencimiento:{
          type: Sequelize.DATE
      },
      cvv:{
          type: Sequelize.STRING,
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
