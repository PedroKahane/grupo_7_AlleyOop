
const product = require("../models/product")
const color = require('../models/color');
const talle = require('../models/talles');
const equipos = require('../models/equipos');

module.exports = {
    tienda:(req,res) => res.render("products/tienda", {styles:"tienda.css", products: product.allWithExtra()}),
    product:(req,res) => res.render("products/productDetail",{styles:"productDetail.css", product: product.oneWithExtra(req.params.id)}),
    create: (req,res) => res.render("products/create",{styles:"editar.css",product:product.one(req.params.id),colors:color.all(),talles:talle.all(),equipos: equipos.all()}),
    save: (req,res) => {
        let result = product.create(req.body,req.file)
        return result ? res.redirect("/productDetail/"+result.id) : res.send("Error al cargar la informacion") 
    },
    edit:(req,res) => res.render("products/edit",{styles:"editar.css",product:product.one(req.params.id),colors: color.all(),talles:talle.all(),equipos: equipos.all()}),
    update: (req,res) =>{
        let idUpdated = req.params.id ? req.params.id : req.body.id
        let result = product.edit(req.body,idUpdated)
        return result ? res.redirect("/productDetail/"+idUpdated) : res.status(500).send("error en la carga") 
    },
}