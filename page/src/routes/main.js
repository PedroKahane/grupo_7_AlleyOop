const express = require('express');
const router = express.Router();
const main = require("../controllers/main")
const controller = require("../controllers/user")
const authMiddleware = require("../middlewares/authMiddleware")

router.get("/", main.index)
router.get("/productCart", authMiddleware, main.productCart)
router.get("/productCartDos",authMiddleware, main.productCartDos)
router.get("/productCartTres",authMiddleware, main.productCartTres)
router.get("/contacto", main.contacto)
router.get("/compraExitosa",authMiddleware, main.compraExitosa)
router.post("/agregarCarrito/:id",authMiddleware,controller.comprarProducto);
router.post("/productCart", authMiddleware, main.productCartpaso)
router.put("/productCartDos", authMiddleware, main.productCartpasoDos)
router.put("/productCartTres", authMiddleware, main.productCartpasoTres)



module.exports = router