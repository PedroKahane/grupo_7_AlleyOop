const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware")
const compras = require("../controllers/compras")

router.get("/productCart", authMiddleware, compras.productCart)
router.get("/productCartDos",authMiddleware, compras.productCartDos)
router.get("/productCartTres",authMiddleware, compras.productCartTres)
router.get("/compraExitosa",authMiddleware, compras.compraExitosa)
router.post("/agregarCarrito/:id",authMiddleware,compras.comprarProducto);
router.post("/productCart", authMiddleware, compras.productCartpaso)
router.put("/productCartDos", authMiddleware, compras.productCartpasoDos)
router.put("/productCartTres", authMiddleware, compras.productCartpasoTres)


module.exports = router