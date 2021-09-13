'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert("users", [
        {
          email: "pedrokahane@gmail.com",
          first_name:"Pedro",
          last_name: "Kahane",
          user_name:"Pedro",
          password: "$2b$10$JsuUaPODhDqXJzgQ/1d4Z.Ohy./knHgjd4Ulk2rBNk1tqgibmGi6i",
          image: "image-1631564018589.jpg",
          admin:1
        },
        {
          email: "pepekahane@yahoo.com.ar",
          first_name:"Pedro",
          last_name: "Kahane",
          user_name:"Pedro_User",
          password: "$2b$10$JsuUaPODhDqXJzgQ/1d4Z.Ohy./knHgjd4Ulk2rBNk1tqgibmGi6i",
          image: "image-1631564018589.jpg",
          admin:0
        },
        {
          email: "salvatsebastian41@gmail.com",
          first_name:"Sebastian",
          last_name: "Salvat",
          user_name:"Seba",
          password: "$2b$10$/LvRNfVdtHDA2ZBdtcXhm.YYuDhfCXY0gO/IX9cjdQ.PBdVGmbkZq",
          image: "image-1629750817486.jpg",
          admin:0
        },
        {
          email: "pedrokahane@alleyoop.com",
          first_name:"Pedro",
          last_name: "Kahane",
          user_name:"Pedro_AO",
          password: "$2b$10$JsuUaPODhDqXJzgQ/1d4Z.Ohy./knHgjd4Ulk2rBNk1tqgibmGi6i",
          image: "image-1631564018589.jpg",
          admin:1
        },
        {
          email: "salvatsebastian41@alleyoop.com",
          first_name:"Sebastian",
          last_name: "Salvat",
          user_name:"Seba_AO",
          password: "$2b$10$/LvRNfVdtHDA2ZBdtcXhm.YYuDhfCXY0gO/IX9cjdQ.PBdVGmbkZq",
          image: "image-1629750817486.jpg",
          admin:1
        },
      ])
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('users', null);
    } catch (error) {
      console.log(error);
    }
  }
};
