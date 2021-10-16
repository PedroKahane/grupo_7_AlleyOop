const path = require('path')
const fs = require('fs')
const sequelize = require('sequelize')
const db = require("../database/config/models/index")
const {Op} = sequelize
const {like} = Op

module.exports = {
    list: async (req,res) =>  {
        try {
            let products = await db.Product.findAll({include: ["Color"],
            attributes: ['id', 'jugador','equipo','descripcion'],
        })
            let colors = await db.Color.findAll({include: ["products"]})
            let countByColor = {}
            colors.forEach(element => {
                
                countByColor[element.nombre] = element.products.length
            });
            let productos = []
            products.forEach(element => {
                products = {
                    id : element.id,
                    jugador : element.jugador,
                    equipo : element.equipo,
                    descripcion : element.descripcion,
                    color : element.Color.nombre,
                    url : "http://localhost:3001/products/" + element.id 
                }
                productos.push(products)
            })
            res.json({
                count: productos.length,
                colors: colors.length,
                countByColor: countByColor,
                data: { 
                    products: productos,
                }
            })
        } catch (error) {
           console.log(error); 
        }
    }  ,
    show: async (req,res) => {
        try {
            let product = await db.Product.findByPk(req.params.id, {include: ["Color", "Talle"]})
            talles = []
            product.Talle.forEach(element => {
                talles.push(element.abreviatura)
            })
            producto = {
                id : product.id,
                jugador : product.jugador,
                equipo : product.equipo,
                numero: product.numero_camiseta,
                precio: product.precio,
                descuento: product.descuento,
                descripcion : product.descripcion,
                color : product.Color.nombre,
                talle : talles,
                imagenFrente: "http://localhost:3001/uploads/" + product.imagen_frente,
                imagenEspalda: "http://localhost:3001/uploads/" + product.imagen_espalda,
            }
            res.json({
                product:producto
            })
        } catch (error) {
            console.log(error);
        }
    }
}