'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert("talles", [
        {
          nombre: "Extra-Small",
          abreviatura:"XS"
        },
        {
          nombre: "Small",
          abreviatura:"S"
        },
        {
          nombre: "Medium",
          abreviatura:"M"
        },
        {
          nombre: "Large",
          abreviatura:"L"
        },
        {
          nombre: "Extra-Large",
          abreviatura:"XL"
        }
      ])
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('talles', null);
    } catch (error) {
      console.log(error);
    }
  }
};
