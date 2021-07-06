const path = require('path');

module.exports = {
    index:(req,res) => res.render("index",{styles:"styles.css"}),
    contacto:(req,res) => res.render("contacto",{styles:"contacto.css"}),
    login:(req,res) => res.render("login",{styles:"login.css"}),
    register:(req,res) => res.render("register",{styles:"login.css"}),
    productDetail:(req,res) => res.render("productDeatil",{styles:"productDetail.css"}),
    tienda:(req,res) => res.render("tienda",{styles:"tienda.css"}),
    productCart:(req,res) => res.render("productCart",{styles:"productCart.css"}),
    productCartDos:(req,res) => res.render("productCartDos",{styles:"productCart.css"}),
    productCartTres:(req,res) => res.render("productCartTres",{styles:"productCart.css"}),
}
