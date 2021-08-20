const path = require('path');
const product = require("../models/product")

;

module.exports = {
    index:(req,res) => res.render("index",{styles:"styles.css",  products: product.allWithExtra()}),
    contacto:(req,res) => res.render("contacto",{styles:"contacto.css", }),
}
