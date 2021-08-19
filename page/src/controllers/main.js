const path = require('path');
const product = require("../models/product")
const user = require("../models/user")
const comprasModel = require("../models/compras")

module.exports = {
    index:(req,res) => res.render("index",{styles:"styles.css",  products: product.allWithExtra()}),
    contacto:(req,res) => res.render("contacto",{styles:"contacto.css", }),
    productCart:(req,res) => res.render("carrito/productCart",{styles:"productCart.css", user: user.one(req.session.userLogged.id)}),
    productCartDos:(req,res) => res.render("carrito/productCartDos",{styles:"productCart.css"}),
    productCartTres:(req,res) => res.render("carrito/productCartTres",{styles:"productCart.css"}),
    productCartpaso: (req,res) => {
        result = comprasModel.productCart(req.body)
        return res.redirect("/productCartDos")
    }
}
