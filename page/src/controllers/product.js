
const product = require("../models/product")
const color = require('../models/color');
const talle = require('../models/talles');
const equipos = require('../models/equipos');

module.exports = {
    tienda:(req,res) => res.render("products/tienda", {styles:"tienda.css", products: product.allWithExtra()}),
    product:(req,res) => res.render("products/productDetail",{styles:"productDetail.css", product: product.oneWithExtra(req.params.id)}),
    edit:(req,res) => res.render("products/edit",{styles:"editar.css",product:product.one(req.params.id),colors: color.all(),talles:talle.all(),equipos: equipos.all()}),
    update: (req,res) =>{
        let result = product.edit(req.body,req.params.id)
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion") 
    },
}