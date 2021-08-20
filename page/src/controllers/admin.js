const product = require("../models/product")
const compras = require("../models/compras")

module.exports = {
    admin:(req,res) => res.render("admin/admin",{styles:"admin.css"}),
    products:(req,res) => res.render("admin/products",{styles:"adminProduct.css",products: product.allWithExtra()}),
    ventas:(req,res) =>  res.render("admin/ventas",{styles:"ventas.css",compras: compras.allWithExtra()}),
}
