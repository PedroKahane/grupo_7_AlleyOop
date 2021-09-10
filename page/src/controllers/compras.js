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
                    estado_producto: 0
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
    productCartTres:(req,res) => res.render("carrito/productCartTres",{styles:"productCart.css",compras: comprasModel.oneWithExtra(comprasModel.ultimoId()) }),
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
    productCartpasoDos: async (req,res) => {
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
            res.render("carrito/productCartDos",{styles:"productCart.css", direcciones: direccion })
            return res.redirect("/compras/productCartDos")
        } catch (error) {
            
        }
      
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
