'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   try {
    await queryInterface.bulkInsert("metodo_de_pago", [
      {
        metodo_de_pago: "debito",
        numero_tarjeta: 1234567890123456,
        vencimiento: "12/05/2026",
        cvv:"$2b$10$iv3wG7KmDL9YVIuGbnTSuuavja9fPBwSVPqCDkYAIj2HNygeoRnHO",
        user_id:1
      },
      {
        metodo_de_pago: "debito",
        numero_tarjeta: 1234567890123456,
        vencimiento: "12/05/2026",
        cvv:"$2b$10$iv3wG7KmDL9YVIuGbnTSuuavja9fPBwSVPqCDkYAIj2HNygeoRnHO",
        user_id:2
      },
      {
        metodo_de_pago: "credito",
        numero_tarjeta: 1234567890123456,
        vencimiento: "12/05/2026",
        cvv:"$2b$10$iv3wG7KmDL9YVIuGbnTSuuavja9fPBwSVPqCDkYAIj2HNygeoRnHO",
        user_id:3
      },
      {
        metodo_de_pago: "credito",
        numero_tarjeta: 1234567890123456,
        vencimiento: "12/05/2026",
        cvv:"$2b$10$iv3wG7KmDL9YVIuGbnTSuuavja9fPBwSVPqCDkYAIj2HNygeoRnHO",
        user_id:4
      },
      {
        metodo_de_pago: "credito",
        numero_tarjeta: 1234567890123456,
        vencimiento: "12/05/2026",
        cvv:"$2b$10$iv3wG7KmDL9YVIuGbnTSuuavja9fPBwSVPqCDkYAIj2HNygeoRnHO",
        user_id:5
      }
    ])
   } catch (error) {
     console.log(error);
   }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('metodo_de_pago', null);
    } catch (error) {
      console.log(error);
    }
  }
};
