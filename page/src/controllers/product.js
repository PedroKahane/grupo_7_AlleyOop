const path = require('path');
const product = require("../models/product")
const equipos = require("../models/equipos")

module.exports = {
    tienda:(req,res) => res.render("tienda",{styles:"tienda.css", products: product.allWithExtra()}),
    product:(req,res) => res.render("productDetail",{styles:"productDetail.css"})
}