const { validationResult } = require('express-validator');

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
                if(req.files){
                    let imagen_frente = path.resolve(__dirname,"../../public/uploads",req.files[0].filename)
                    if(fs.existsSync(imagen_frente)) {
                        fs.unlinkSync(imagen_frente)
                    }
                    if(req.files[1]){
                        let imagen_espalda = path.resolve(__dirname,"../../public/uploads",req.files[1].filename)
                         if(fs.existsSync(imagen_espalda)) {
                            fs.unlinkSync(imagen_espalda)
                        }
                    }
                   
                }
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
        let productoAnterior = await db.Product.findByPk(req.params.id)

        let imagenFrente = path.resolve(__dirname,"../../public/uploads",productoAnterior.imagen_frente)
        let imagenEspalda = path.resolve(__dirname,"../../public/uploads",productoAnterior.imagen_espalda)
        if(fs.existsSync(imagenFrente)) {
            fs.unlinkSync(imagenFrente)
        }
        if(fs.existsSync(imagenEspalda)) {
            fs.unlinkSync(imagenEspalda)
        }
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
        req.body.talles.forEach(talle => {
            db.product_talles.create({
                product_id : product.id,
                talles_id : talle 
            })
        });
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
                if(req.files){
                    let imagen_frente = path.resolve(__dirname,"../../public/uploads",req.files[0].filename)
                    if(fs.existsSync(imagen_frente)) {
                        fs.unlinkSync(imagen_frente)
                    }
                    if(req.files[1]){
                        let imagen_espalda = path.resolve(__dirname,"../../public/uploads",req.files[1].filename)
                         if(fs.existsSync(imagen_espalda)) {
                            fs.unlinkSync(imagen_espalda)
                        }
                    }
                   
                }
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
        let productoAnterior = await db.Product.findByPk(req.params.id)

        let imagen_frente = path.resolve(__dirname,"../../public/uploads",productoAnterior.imagen_frente)
        let imagen_espalda = path.resolve(__dirname,"../../public/uploads",productoAnterior.imagen_espalda)
        if(fs.existsSync(imagen_frente)) {
            fs.unlinkSync(imagen_frente)
        }
        if(fs.existsSync(imagen_espalda)) {
            fs.unlinkSync(imagen_espalda)
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
        let talles = await db.product_talles.destroy({where: {product_id:req.params.id}})
        const product = await db.Product.update(productData, {where: {id: req.params.id}})

        req.body.talles.forEach(talle => {
            db.product_talles.create({
                product_id : req.params.id,
                talles_id : talle
            })
        });
        return res.redirect("/productDetail/" + req.params.id)
        
    },
    delete: async (req,res) => {
        try {
            let talles = await db.product_talles.destroy({where: {product_id:req.params.id}})
            let product = await db.Product.findOne({where: {id:req.params.id}})
            let imagenFrente = path.resolve(__dirname,"../../public/uploads",product.imagen_frente)
            let imagenEspalda = path.resolve(__dirname,"../../public/uploads",product.imagen_espalda)
            if(fs.existsSync(imagenFrente)) {
                fs.unlinkSync(imagenFrente)
            }
            if(fs.existsSync(imagenEspalda)) {
                fs.unlinkSync(imagenEspalda)
            }
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