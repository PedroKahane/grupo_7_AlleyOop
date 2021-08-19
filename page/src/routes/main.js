const express = require('express');
const router = express.Router();
const main = require("../controllers/main")
const controller = require("../controllers/user")
const authMiddleware = require("../middlewares/authMiddleware")

router.get("/", main.index)
router.get("/productCart", authMiddleware, main.productCart)
router.get("/productCartDos",authMiddleware, main.productCartDos)
router.post("/agregarCarrito/:id",authMiddleware,controller.comprarProducto);
router.post("/productCart", authMiddleware, main.productCartpaso)
router.get("/productCartTres",authMiddleware, main.productCartTres)
router.get("/contacto", main.contacto)



module.exports = router