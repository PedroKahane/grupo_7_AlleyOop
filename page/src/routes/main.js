const express = require('express');
const router = express.Router();
const main = require("../controllers/main")

router.get("/", main.index)
router.get("/productCart", main.productCart)
router.get("/productCartDos", main.productCartDos)
router.get("/productCartTres", main.productCartTres)
router.get("/contacto", main.contacto)



module.exports = router