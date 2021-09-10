//const user = require("../models/user")
//const comprasModel = require("../models/compras");
const { validationResult } = require('express-validator');
const sequelize = require('sequelize')
const bcrypt = require('bcrypt');
let db = require("../database/models/index");
const {Op} = sequelize
const {like} = Op

module.exports = {
    productCart: async (req,res) => {
        try {
            let compra = await db.compras.findOne(
                {include: ['product'],
                where: { 
                    estado_producto: 0,
                    user_id: req.session.userLogged.id
                } 
            })
            res.render("carrito/productCart",
            {styles:"productCart.css", 
            compras: compra})
        } catch (error) {
            res.send(error)
        }
    },
    productCartDos: async (req,res) => {try {
        let direccion = await db.entrega.findAll(
            {include: ['User'],
            where: { 
                user_id: req.session.userLogged.id
            } 
        })
        res.render("carrito/productCartDos",{styles:"productCart.css", direcciones: direccion })
        
    } catch (error) {
        console.log(error)
    }
        },
    productCartTres: async (req,res) => {
        try {
            let compra = await db.compras.findOne(
                {include: ['product'],
                where: { 
                    estado_producto: 2,
                    user_id: req.session.userLogged.id
                } 
            })
            let tarjeta = await db.metodo.findAll(
                {include: ['User'],
                where: { 
                    user_id: req.session.userLogged.id
                } 
            })
            res.render("carrito/productCartTres",
            {styles:"productCart.css", 
            compras: compra,
        tarjetas: tarjeta})
        } catch (error) {
            console.log(error)
        }

    },
    compraExitosa:(req,res) => res.render("carrito/compraExitosa",{styles:"compraExitosa.css",}),
    productCartpaso: (req,res) => {
        try {
            db.compras.update( {
                estado_producto : 1,
                cantidad: req.body.cantidad,
                precio_total: (req.body.cantidad * req.body.precio),
            }, {
                where: { 
                    estado_producto: 0
                } 
            })
            return res.redirect("/compras/productCartDos")
        } catch (error) {
            res.send(error)
        }
        
    },
    nuevaDireccion: async (req,res) => {
        try {
            const resultValidation = validationResult(req);
            let direccion = await db.entrega.findAll(
                {include: ['User'],
                where: { 
                    user_id: req.session.userLogged.id
                } 
            })
            if (!resultValidation.isEmpty()) {
                return res.render('carrito/productCartDos', {
                    styles:"productCart.css", 
                    direcciones: direccion, 
                    errors: resultValidation.mapped(),
                    oldData: req.body
                });
            }
            db.entrega.create( {
                direccion : req.body.direccion,
                provincia: req.body.provincia,
                localidad: req.body.localidad,
                codigo_postal: req.body.codigopostal,
                telefono: req.body.telefono,
                user_id: req.session.userLogged.id
            })
            direccion = await db.entrega.findAll(
                {include: ['User'],
                where: { 
                    user_id: req.session.userLogged.id
                } 
            })
            res.render("carrito/productCartDos",{styles:"productCart.css", direcciones: direccion })
        } catch (error) {
            
        }
      
    },
    productCartpasoDos: async (req,res) =>{
        try {
            db.compras.update( {
                estado_producto : 2,
                entrega_id: parseInt(req.body.direccion),
            }, {
                where: { 
                    estado_producto: 1
                } 
            })
            return res.redirect("/compras/productCartTres")
        } catch (error) {
            console.log(error)
        }
    },
    agregarTarjeta : async (req,res) => {  
        try {
            let compra = await db.compras.findOne(
                {include: ['product'],
                where: { 
                    estado_producto: 2,
                    user_id: req.session.userLogged.id
                } 
            })
            let tarjeta = await db.metodo.findAll(
                {include: ['User'],
                where: { 
                    user_id: req.session.userLogged.id
                } 
            })
            const resultValidation = validationResult(req);
            if (!resultValidation.isEmpty()) {
                return res.render('carrito/productCartTres', {
                    styles:"productCart.css", 
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    compras: compra,
                    tarjetas: tarjeta
                });
            }
            db.metodo.create( {
                metodo_de_pago : req.body.metododepago,
                numero_tarjeta: req.body.numerotarjeta,
                vencimiento: req.body.vencimiento,
                cvv: bcrypt.hashSync(req.body.cvv,10),
                user_id: req.session.userLogged.id,
            })
            tarjeta = await db.metodo.findAll(
                {include: ['User'],
                where: { 
                    user_id: req.session.userLogged.id
                } 
            })
            res.render("carrito/productCartTres",
            {styles:"productCart.css", 
            compras: compra,
        tarjetas: tarjeta})
        } catch (error) {
            console.log(error)
        }
    },
    productCartpasoTres: async (req,res) =>{
        try {
            db.compras.update( {
                estado_producto : 3,
                metodo_id: parseInt(req.body.metodo),
            }, {
                where: { 
                    estado_producto: 2
                } 
            })
            return res.redirect("/compras/compraExitosa")
        } catch (error) {
            console.log(error)
        }
    },
    comprarProducto :async (req,res) => {
        let carrito = await db.compras.findOne(
            {
            where: { 
                estado_producto: 0,
                user_id: req.session.userLogged.id
            } 
        })
            
        if(carrito){
            try {
                db.compras.update( {
                    product_id : req.params.id,
                }, {
                    where: { 
                        estado_producto: 0,
                        user_id: req.session.userLogged.id
                    } 
                })
                return res.redirect("/compras/productCart");
            } catch (error) {
                console.log(error)
            }
                
        }else{
            try {
                db.compras.create( {
                    product_id : req.params.id,
                    user_id: req.session.userLogged.id,
                })
                return res.redirect("/compras/productCart");
            } catch (error) {
                console.log(error)
            }
        }

        
    }
}
