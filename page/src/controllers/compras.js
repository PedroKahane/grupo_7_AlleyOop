const user = require("../models/user")
const comprasModel = require("../models/compras");
const { validationResult } = require('express-validator');

module.exports = {
    productCart:(req,res) => {
        res.render("carrito/productCart",{styles:"productCart.css", compras: comprasModel.oneWithExtra(comprasModel.ultimoId()) })},
    productCartDos:(req,res) => res.render("carrito/productCartDos",{styles:"productCart.css", compras: comprasModel.one(comprasModel.ultimoId())}),
    productCartTres:(req,res) => res.render("carrito/productCartTres",{styles:"productCart.css",compras: comprasModel.oneWithExtra(comprasModel.ultimoId()) }),
    compraExitosa:(req,res) => res.render("carrito/compraExitosa",{styles:"compraExitosa.css",}),
    productCartpaso: (req,res) => {
        result = comprasModel.productCart(req.body, req.body.id)
        return res.redirect("/compras/productCartDos")
    },
    productCartpasoDos: (req,res) => {
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            return res.render('carrito/productCartDos', {
                styles:"productCart.css", 
                compras: comprasModel.one(comprasModel.ultimoId()), 
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        result = comprasModel.productoCartDos(req.body, req.body.id)
        return res.redirect("/compras/productCartTres")
    },
    productCartpasoTres : (req,res) => {  
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            return res.render('carrito/productCartTres', {
                styles:"productCart.css", 
                compras: comprasModel.oneWithExtra(comprasModel.ultimoId()), 
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }     
        result = comprasModel.productoCartTres(req.body, req.body.id)
        return res.redirect("/compras/compraExitosa")
    },
    comprarProducto : (req,res) => {
        result = comprasModel.comprarProducto(req.params.id,req.session.userLogged.id)
        return res.redirect("/compras/productCart")
    }
}
