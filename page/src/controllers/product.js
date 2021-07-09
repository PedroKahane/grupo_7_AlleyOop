const path = require('path');
const product = require("../models/product")

module.exports = {
    tienda:(req,res) => res.send({styles:"tienda.css", products: product.allWithExtra()}),
    product:(req,res) => res.render("productDetail",{styles:"productDetail.css"})
}