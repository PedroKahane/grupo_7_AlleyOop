const path = require('path');
const product = require("../models/product")
const user = require("../models/user")
const comprasModel = require("../models/compras");
const compras = require('../models/compras');

module.exports = {
    index:(req,res) => res.render("index",{styles:"styles.css",  products: product.allWithExtra()}),
    contacto:(req,res) => res.render("contacto",{styles:"contacto.css", }),
    productCart:(req,res) => res.render("carrito/productCart",{styles:"productCart.css", user: user.one(req.session.userLogged.id), }),
    productCartDos:(req,res) => res.render("carrito/productCartDos",{styles:"productCart.css", compras: comprasModel.one(comprasModel.ultimoId())}),
    productCartTres:(req,res) => res.render("carrito/productCartTres",{styles:"productCart.css",user: user.one(req.session.userLogged.id), compras: comprasModel.one(comprasModel.ultimoId())}),
    compraExitosa:(req,res) => res.render("carrito/compraExitosa",{styles:"compraExitosa.css",}),
    productCartpaso: (req,res) => {
        result = comprasModel.productCart(req.body)
        return res.redirect("/productCartDos")
    },
    productCartpasoDos: (req,res) => {
        result = comprasModel.productoCartDos(req.body, req.body.id)
        return res.redirect("/productCartTres")
    },
    productCartpasoTres : (req,res) => {
        result = comprasModel.productoCartTres(req.body, req.body.id)
        return res.redirect("/")
    }
}
