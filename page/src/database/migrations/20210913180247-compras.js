'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
try {
  queryInterface.createTable("compras", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  cantidad:{
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: null
  },
  precio_total:{
      type: Sequelize.INTEGER,
      allowNull: true,
  },
  estado_producto:{
      type: Sequelize.INTEGER,
      defaultValue: 0
  },
  product_id:{
      type: Sequelize.BIGINT(10),
      foreignKey: true
  },
  user_id:{
      type: Sequelize.BIGINT(10),
      foreignKey: true  
    },
  entrega_id:{
      type: Sequelize.BIGINT(10),
      foreignKey: true,
      defaultValue: null
  },
  metodo_id:{
      type: Sequelize.BIGINT(10),
      foreignKey: true,
      defaultValue: null
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
  console.log(error);
}
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('compras');
     
  }
};
