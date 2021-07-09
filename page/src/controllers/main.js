const path = require('path');
const product = require("../models/product")

module.exports = {
    index:(req,res) => res.render("index",{styles:"styles.css",  products: product.allWithExtra()}),
    contacto:(req,res) => res.render("contacto",{styles:"contacto.css"}),
    login:(req,res) => res.render("login",{styles:"login.css"}),
    register:(req,res) => res.render("register",{styles:"login.css"}),
    productCart:(req,res) => res.render("productCart",{styles:"productCart.css"}),
    productCartDos:(req,res) => res.render("productCartDos",{styles:"productCart.css"}),
    productCartTres:(req,res) => res.render("productCartTres",{styles:"productCart.css"})
}
