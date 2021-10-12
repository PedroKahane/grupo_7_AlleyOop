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
            res.json({
                count: products.length,
                colors: colors.length,
                countByColor: countByColor,
                data: { 
                    products: products,
                }
            })
        } catch (error) {
           console.log(error); 
        }
    }  ,
    show: async (req,res) => {
        try {
            let product = await db.Product.findByPk(req.params.id, {include: ["Color", "Talle"]})
            res.json({
                product:product
            })
        } catch (error) {
            console.log(error);
        }
    }
}