//const product = require("../models/product")
//const compras = require("../models/compras")
const db = require("../database/models");
const { promiseImpl } = require("ejs");
const sequelize = require('sequelize')
const {Op} = sequelize
const {like} = Op

module.exports = {
    admin: (req,res) => { 
        res.render("admin/admin",{styles:"admin.css"})
    },
        
    products: async (req,res) => {
        try {
            let product = await db.Product.findAll()
            res.render("admin/products",{styles:"adminProduct.css",products: product})
            
        } catch (error) {
            console.log(error)
        }
    },
    ventas: async (req,res) =>{
        try {
            let compras = await db.compras.findAll({include: ['User','product','entrega','metodo']})
            res.render("admin/ventas",{styles:"ventas.css",compras: compras})
        } catch (error) {
            console.log(error)
        }
    },
    ventasCanceladas: async (req,res) => {  
        try {
            let compras = await db.compras.findAll({include: ['User','product','entrega','metodo']})
            res.render("admin/ventasCanceladas",{styles:"ventas.css",compras: compras})
        } catch (error) {
            console.log(error)
        }
    },
    ventasFinalizadas:async(req,res) =>{
        try {
            let compras = await db.compras.findAll({include: ['User','product','entrega','metodo']})
            res.render("admin/ventasFinalizadas",{styles:"ventas.css",compras: compras})
        } catch (error) {
            console.log(error);
        }
    },
    cambiarStatus : (req,res) => {
        try {
            db.compras.update( {
                estado_producto : parseInt(req.body.estadoProducto),
            }, {
                where: { 
                    id: req.params.id
                } 
            })
            return res.redirect("/admin/ventas")
        } catch (error) {
            console.log(error);
        }
    }
}

