'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('colores', [{
        nombre: 'azul',
        paleta: 'rgb(46,36,185)',
      },{
        nombre: 'Roja',
        paleta: 'rgb(165,25,25)',
      },
      {
        nombre: 'verde',
        paleta: 'rgb(7,53,0)',
      },
      {
        nombre: 'violeta',
        paleta: 'rgb(39,0,99)',
      },
      {
        nombre: 'negra',
        paleta: 'rgb(15,15,15)',
      },
      {
        nombre: 'amarilla',
        paleta: 'rgb(255,255,0)',
      }
    ], );
    } catch (error) {
      console.log(error);
    }
    
    
  },
  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('colores', null);
    } catch (error) {
      console.log(error);
    }
  }
};
