const express = require('express');
const router = express.Router();
const main = require("../controllers/main")

router.get("/", main.index)
router.get("/login", main.login)
router.get("/register", main.register)
router.get("/productDetail", main.productDetail)
router.get("/productCart", main.productCart)
router.get("/productCartDos", main.productCartDos)
router.get("/productCartTres", main.productCartTres)
router.get("/contacto", main.contacto)
router.get("/tienda", main.tienda)



module.exports = router