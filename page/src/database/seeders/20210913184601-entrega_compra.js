'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('entrega_compra', [{
        direccion: 'calle falsa 1',
        provincia: 'CABA',
        localidad: 'Palermo',
        codigo_postal: 1234,
        telefono: 1565123478,
        user_id:1,
      },{
        direccion: 'calle Pippen 2',
        provincia: 'CABA',
        localidad: 'Palermo',
        codigo_postal: 1234,
        telefono: 1565123478,
        user_id:2,
      },
      {
        direccion: 'calle Jordan 24',
        provincia: 'CABA',
        localidad: 'Palermo',
        codigo_postal: 1234,
        telefono: 1565123478,
        user_id:3,
      },
      {
        direccion: 'calle Lebron 278',
        provincia: 'CABA',
        localidad: 'Palermo',
        codigo_postal: 1234,
        telefono: 1565123478,
        user_id: 4,
      },
      {
        direccion: 'calle Curry 1',
        provincia: 'CABA',
        localidad: 'Palermo',
        codigo_postal: 1234,
        telefono: 1565123478,
        user_id:5,
      },
    ], );
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('entrega_compra', null);
    } catch (error) {
      console.log(error);
    }
  }

};
