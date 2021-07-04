const path = require('path');

module.exports = {
    index: (req,res) => res.sendFile(path.resolve(__dirname, "../views", "index.html")),
    contacto: (req,res) => res.sendFile(path.resolve(__dirname, "../views", "contacto.html")),
    login: (req,res) => res.sendFile(path.resolve(__dirname, "../views", "login.html")),
    register: (req,res) => res.sendFile(path.resolve(__dirname, "../views", "register.html")),
    productDetail: (req,res) => res.sendFile(path.resolve(__dirname, "../views", "productDetail.html")),
    tienda: (req,res) => res.sendFile(path.resolve(__dirname, "../views", "tienda.html")),
    productCart: (req,res) => res.sendFile(path.resolve(__dirname, "../views", "productCart.html")),
    productCartDos: (req,res) => res.sendFile(path.resolve(__dirname, "../views", "productCartDos.html")),
    productCartTres: (req,res) => res.sendFile(path.resolve(__dirname, "../views", "productCartTres.html")),
}
