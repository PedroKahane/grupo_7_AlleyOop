
const product = require("../models/product")

module.exports = {
    index:(req,res) => res.render("admin/index",{styles:"admin.css",products: product.allWithExtra()}),
}
