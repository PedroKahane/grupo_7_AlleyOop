const express = require('express');
const router = express.Router();
const product = require("../controllers/product")


router.get("/tienda", product.tienda)
router.get("/productDetail", product.product)


module.exports = router