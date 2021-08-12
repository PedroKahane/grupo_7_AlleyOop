const express = require("express");
const router = express.Router();
const controller = require("../controllers/admin");
const userAdmin = require('../middlewares/userAdmin')


router.get("/index" ,userAdmin, controller.index)

module.exports = router