'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('compras', [{
        cantidad: 1,
        precio_total: 4000,
        estado_producto:3,
        product_id:2,
        user_id:1,
        entrega_id:1,
        metodo_id:1,
      },{
        cantidad: 1,
        precio_total: 7000,
        estado_producto:3,
        product_id:8,
        user_id:1,
        entrega_id:1,
        metodo_id:1,
      },
      {
        cantidad: 2,
        precio_total: 12000,
        estado_producto:4,
        product_id:9,
        user_id:1,
        entrega_id:1,
        metodo_id:1,
      },
      {
        cantidad: 2,
        precio_total: 12000,
        estado_producto:10,
        product_id:5,
        user_id:2,
        entrega_id:2,
        metodo_id:2,
      },
      {
        cantidad: 1,
        precio_total: 6000,
        estado_producto:10,
        product_id:6,
        user_id:4,
        entrega_id:4,
        metodo_id:4,
      },

      {
        cantidad: 2,
        precio_total: 4000,
        estado_producto:10,
        product_id:16,
        user_id:3,
        entrega_id:3,
        metodo_id:3,
      },
      {
        cantidad: 2,
        precio_total: 4000,
        estado_producto:10,
        product_id:16,
        user_id:3,
        entrega_id:3,
        metodo_id:3,
      },
      {
        cantidad: 1,
        precio_total: 4000,
        estado_producto:9,
        product_id:17,
        user_id:5,
        entrega_id:5,
        metodo_id:5,
      },
      {
        cantidad: 1,
        precio_total: 4000,
        estado_producto:10,
        product_id:10,
        user_id:4,
        entrega_id:4,
        metodo_id:4,
      }
    ], );
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('compras', null);
    } catch (error) {
      console.log(error);
    }
  }
};
