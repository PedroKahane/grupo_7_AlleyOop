const path = require('path')
const fs = require('fs')
const sequelize = require('sequelize')
const db = require("../database/config/models/index")
const {Op} = sequelize
const {like} = Op


module.exports = {
    list: async (req,res) =>  {
        try {
            let ventas = await db.compras.findAll({include: ["product"],where: { 
                estado_producto: [3,4,9,10]},
                order: [
                    ['id', 'DESC']
                ],
            attributes: ['id', 'precio_total'],
        })
            res.json({
                count: ventas.length,
                data: ventas,
            })
        } catch (error) {
           console.log(error); 
        }
    }  ,
    show: async (req,res) => {
        try {
            let product = await db.compras.findByPk(req.params.id,{include: ["product"],where: { 
                estado_producto: [3,4,9,10]},
                order: [
                    ['id', 'DESC']
                ],
            attributes: ['id', 'precio_total'],
        })
            res.json({
                product:product
            })
        } catch (error) {
            console.log(error);
        }
    }
}