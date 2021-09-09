const product = require("../models/product")
const compras = require("../models/compras")
const db = require("../database/models");
const { promiseImpl } = require("ejs");
const sequelize = require('sequelize')
const {Op} = sequelize
const {like} = Op

module.exports = {
    admin: async(req,res) => { 
        res.render("admin/admin",{styles:"admin.css"})
    },
        
    products:(req,res) => res.render("admin/products",{styles:"adminProduct.css",products: product.allWithExtra()}),
    ventas:(req,res) =>  res.render("admin/ventas",{styles:"ventas.css",compras: compras.allWithExtra()}),
    ventasCanceladas:(req,res) =>  res.render("admin/ventasCanceladas",{styles:"ventas.css",compras: compras.allWithExtra()}),
    ventasFinalizadas:(req,res) =>  res.render("admin/ventasFinalizadas",{styles:"ventas.css",compras: compras.allWithExtra()}),
    cambiarStatus : async (req,res) => {
        
        //result = compras.cambioStatus(req.body,req.params.id)
        //return res.redirect("/admin/ventas")
    }
}

