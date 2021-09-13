'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable("users", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      email:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },
      first_name:{
          type: Sequelize.STRING,
          allowNull: false,
      },
      last_name:{
          type: Sequelize.STRING,
          allowNull: false
      },
      user_name:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },
      password:{
          type: Sequelize.STRING,
          allowNull: false,
      },
      image:{
          type: Sequelize.STRING
      },
      admin:{
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0
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
    
      await queryInterface.dropTable('users');
     
  }
};
