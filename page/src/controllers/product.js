
const product = require("../models/product")
const color = require('../models/color');
const { validationResult } = require('express-validator');
const talle = require('../models/talles');
const equipos = require('../models/equipos');
const compras = require('../models/compras');
const { filterColors, filterByColors } = require("../models/product");
const path = require('path')
const fs = require('fs')
const sequelize = require('sequelize')
const db = require("../database/models/index");
const {Op} = sequelize
const {like} = Op

module.exports = {
    tienda: async (req,res) => {
        try {
            let products = await db.Product.findAll({include: ["Color"] })
            res.render("products/tienda", {styles:"tienda.css", products: products})
        } catch (error) {
            res.send(error);
        }},  
    product: async (req,res) => {
        try {
            let product = await db.Product.findByPk(req.params.id, {include: ["Talle"]})
            res.render("products/productDetail",{styles:"productDetail.css", product: product})
        } catch (error) {
            res.send(error);
        }},
    create: async (req,res) => {
        try{
            return res.render("products/create", {
                styles:"editar.css",
                colors: await db.Color.findAll(),
                talles: await db.Talle.findAll()
            })
        } catch(error){
            return res.send(error)
        }
    },
    misCompras: async (req,res) => { 
        try {
            let compras = await db.compras.findAll({include: ['User','product','entrega','metodo'], where : {
                user_id: req.session.userLogged.id
            },
            order: [
                ['id', 'DESC']
            ]})
            res.render("products/misCompras",{styles:"ventas.css", compras: compras })
        } catch (error) {
            console.log(error);
        }
    },
    save: async (req,res) => {
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            try {
                return res.render("products/create", {
                    styles:"editar.css",
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    colors: await db.Color.findAll(),
                    talles: await db.Talle.findAll()
                });
            } catch (error) {
                res.send(error)
            }
        }
        let imagenFrente = req.files != undefined ? req.files.find(archivo => archivo.fieldname == 'frente') : imagenDefault;
        let imagenEspalda = req.files != undefined ? req.files.find(archivo => archivo.fieldname == 'espalda') : imagenDefault;
        let productData =  {
            jugador: req.body.jugador,
            equipo: req.body.equipo,
            numero_camiseta: req.body.numeroCamiseta,
            precio:req.body.precio,
            descuento: req.body.descuento,
            imagen_frente: imagenFrente != null ? imagenFrente.filename : imagenDefault,
            imagen_espalda: imagenEspalda != null ? imagenEspalda.filename : imagenDefault,
            descripcion: req.body.descripcion,
            destacado: parseInt(req.body.destacado),
            colors_id: req.body.colors
        }
        const product = await db.Product.create(productData)
        return res.redirect("/tienda")
    },
    edit: async (req,res) => {
        try{
            return res.render("products/edit", {
                styles:"editar.css",
                colors: await db.Color.findAll(),
                talles: await db.Talle.findAll(),
                product: await db.Product.findByPk(req.params.id)
            })
        } catch(error){
            return console.log(error);
        }
    },
    update: async (req,res) =>{
        const resultValidation = validationResult(req);
        
        if (!resultValidation.isEmpty()) {
            try {
                return res.render("products/edit", {
                    styles:"editar.css",
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    colors: await db.Color.findAll(),
                    talles: await db.Talle.findAll(),
                    product: await db.Product.findByPk(req.params.id)
                });
            } catch (error) {
                res.send(error)
            }
        }
        let imagenFrente = req.files != undefined ? req.files.find(archivo => archivo.fieldname == 'frente') : imagenDefault;
        let imagenEspalda = req.files != undefined ? req.files.find(archivo => archivo.fieldname == 'espalda') : imagenDefault;
        let productData =  {
            jugador: req.body.jugador,
            equipo: req.body.equipo,
            numero_camiseta: req.body.numeroCamiseta,
            precio:req.body.precio,
            descuento: req.body.descuento,
            imagen_frente: imagenFrente != null ? imagenFrente.filename : imagenDefault,
            imagen_espalda: imagenEspalda != null ? imagenEspalda.filename : imagenDefault,
            descripcion: req.body.descripcion,
            destacado: parseInt(req.body.destacado),
            colors_id: req.body.colors
        }
        const product = await db.Product.update(productData, {where: {id: req.params.id}})
        return res.redirect("/productDetail/" + req.params.id)
        
    },
    delete: async (req,res) => {
        try {
            let result = await db.Product.destroy({where: {id:req.params.id}});
            return result == true ? res.redirect("/tienda") : res.status(500).send("Error en la carga")
        } catch (error) {
            console.log(error);
        }
    },
    colors: async (req,res) => {
        if(req.query.colores != undefined){
        let products = await db.Product.findAll({include: ["Color"], where : { colors_id : req.query.colores} })
        return res.render("products/tienda", {styles:"tienda.css", products: products})
        } else{
            return res.redirect("/tienda")
        }
    },
}