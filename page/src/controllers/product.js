
const product = require("../models/product")
const color = require('../models/color');
const talle = require('../models/talles');
const equipos = require('../models/equipos');
const compras = require('../models/compras');
const { filterColors, filterByColors } = require("../models/product");

module.exports = {
    tienda:(req,res) => res.render("products/tienda", {styles:"tienda.css", products: product.allWithExtra()}),
    product:(req,res) => res.render("products/productDetail",{styles:"productDetail.css", product: product.oneWithExtra(req.params.id)}),
    create: (req,res) => res.render("products/create",{styles:"editar.css",product:product.one(req.params.id),colors:color.all(),talles:talle.all(),equipos: equipos.all()}),
    misCompras: (req,res) => res.render("products/misCompras",{styles:"ventas.css", compras: compras.comprasPorUsuario(req.session.userLogged.id) }),
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
        if(req.query.colores != undefined){
        return res.render("products/filter", {styles:"tienda.css", products: product.filterByColors(req.query.colores)})
        } else{
            return res.render("products/tienda", {styles:"tienda.css", products: product.allWithExtra()})
        }
    },
}