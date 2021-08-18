
const product = require("../models/product")
const color = require('../models/color');
const talle = require('../models/talles');
const equipos = require('../models/equipos');

module.exports = {
    tienda:(req,res) => res.render("products/tienda", {styles:"tienda.css", products: product.allWithExtra()}),
    product:(req,res) => res.render("products/productDetail",{styles:"productDetail.css", product: product.oneWithExtra(req.params.id)}),
    create: (req,res) => res.render("products/create",{styles:"editar.css",product:product.one(req.params.id),colors:color.all(),talles:talle.all(),equipos: equipos.all()}),
    save: (req,res) => {
        // return res.send({data: req.body, archivos: req.files})
        let result = product.create(req.body,req.files)
        return result ? res.redirect("/productDetail/"+result.id) : res.send("Error al cargar la información") 
    },
    edit:(req,res) => res.render("products/edit",{styles:"editar.css",product:product.one(req.params.id),colors: color.all(),talles:talle.all(),equipos: equipos.all()}),
    update: (req,res) =>{
        let idUpdated = req.params.id ? req.params.id : req.body.id
        let result = product.edit(req.body, req.files,idUpdated)
        return result ? res.redirect("/productDetail/"+idUpdated) : res.status(500).send("Error en la carga") 
    },
    delete: (req,res) => {
        let result = product.delete(req.params.id);
        return result == true ? res.redirect("/tienda") : res.status(500).send("Error en la carga")
    },
    colors: (req,res) => {
        return res.render("products/tienda", {styles:"tienda.css", products: product.findByColors(req.query.colores)})
    },
}