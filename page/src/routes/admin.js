const express = require("express");
const router = express.Router();
const controller = require("../controllers/admin");
const userAdmin = require('../middlewares/userAdmin')




router.get("/admin" ,userAdmin, controller.admin)
router.get("/products" ,userAdmin, controller.products)
router.get("/ventas" ,userAdmin, controller.ventas)
router.get("/ventasCanceladas" ,userAdmin, controller.ventasCanceladas)
router.get("/ventasFinalizadas" ,userAdmin, controller.ventasFinalizadas)

module.exports = router