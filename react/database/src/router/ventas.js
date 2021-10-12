const express = require("express")
const router = express.Router()

const controller = require("../controllers/ventas")

router.get("/", controller.list)

module.exports = router