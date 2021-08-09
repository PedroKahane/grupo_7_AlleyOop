const express = require('express');
const router = express.Router();
const main = require("../controllers/main")
const authMiddleware = require("../middlewares/authMiddleware")

router.get("/", main.index)
router.get("/productCart", authMiddleware, main.productCart)
router.get("/productCartDos",authMiddleware, main.productCartDos)
router.get("/productCartTres",authMiddleware, main.productCartTres)
router.get("/contacto", main.contacto)



module.exports = router