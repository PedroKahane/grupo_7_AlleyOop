const path = require('path');
const db = require('../database/models');
const product = require("../models/product")

;

module.exports = {
    index: async (req,res) => {
        try {
            let product = await db.Product.findAll({where: {destacado: 1}})
            res.render("index",{styles:"styles.css",  products: product })
        } catch (error) {
        console.log(error);
        }
    },
    contacto:(req,res) => res.render("contacto",{styles:"contacto.css", }),
}
