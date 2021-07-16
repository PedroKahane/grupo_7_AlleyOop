const express = require('express');
const router = express.Router();
const product = require("../controllers/product");


router.get("/tienda", product.tienda);
router.get("/create", product.create);
router.get("/productDetail/:id", product.product);
router.get("/edit/:id", product.edit);

router.post("/save", product.save);
router.put("/update/:id",product.update);


module.exports = router