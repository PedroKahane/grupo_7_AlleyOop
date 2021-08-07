const path = require('path');
const product = require("../models/product")

module.exports = {
    index:(req,res) => res.render("index",{styles:"styles.css",  products: product.allWithExtra()}),
    contacto:(req,res) => res.render("contacto",{styles:"contacto.css"}),
    productCart:(req,res) => res.render("carrito/productCart",{styles:"productCart.css"}),
    productCartDos:(req,res) => res.render("carrito/productCartDos",{styles:"productCart.css"}),
    productCartTres:(req,res) => res.render("carrito/productCartTres",{styles:"productCart.css"})
}
