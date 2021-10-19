const path = require('path')
const fs = require('fs')
const sequelize = require('sequelize')
const db = require("../database/config/models/index")
const {Op} = sequelize
const {like} = Op


module.exports = {
    list: async (req,res) =>  {
        try {
        let Ventas = await db.compras.findAll({include: ["product"],where: { 
            estado_producto: [3,4,9,10]},
            order: [
                ['id', 'DESC']
            ],
            attributes: ['id', 'precio_total'],
        })
        let ultimas5Ventas = await db.compras.findAll({include: ["product"],where: { 
            estado_producto: [3,4,9,10]},
            order: [
                ['id', 'DESC']
            ],
            attributes: ['id', 'precio_total', 'cantidad'],
            limit : 5,
    })
            let ventasPorProducto = await db.Product.findAll({include : ["compra"]})
            let TotalIngresos = 0
            Ventas.forEach(element => {
                TotalIngresos += element.precio_total 
                
            });
            let countByProduct = []
            ventasPorProducto.forEach(element => {
                if(element.compra.length > 0){
                    ventas = {
                        nombre: element.jugador,
                        cantidad: element.compra.length
                    }
                    countByProduct.push(ventas)
                }
            });
            let ultimasVentas = []
            ultimas5Ventas.forEach(element => {
                products = {
                    id : element.id,
                    precio_total : element.precio_total,
                    cantidad: element.cantidad,
                    producto : {
                        id: element.product.id,
                        equipo : element.product.equipo,
                        jugador: element.product.jugador,
                        descripcion : element.product.descripcion,
                        url : "http://localhost:3001/products/" + element.id 
                    }
                }
                ultimasVentas.push(products)
            })
            res.json({
                TotalIngresos: TotalIngresos,
                count: Ventas.length,
                countByProduct: countByProduct,
                ultimas5Ventas:ultimasVentas,
            })
        } catch (error) {
           console.log(error); 
        }
    },
}