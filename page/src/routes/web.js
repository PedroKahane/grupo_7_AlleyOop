const express = require('express');
const path = require('path');
const router = express.Router();



router.get("/", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "index.html")))
router.get("/login", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "login.html")))
router.get("/register", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "register.html")))
router.get("/productDetail", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "productDetail.html")))
router.get("/productCart", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "productCart.html")))
router.get("/contacto", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "contacto.html")))
router.get("/quienesSomos", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "quienesSomos.html")))
router.get("/tienda", (req,res) => res.sendFile(path.resolve(__dirname, "../views", "tienda.html")))

module.exports = router