const express = require('express');
const { body } = require("express-validator");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware")
const compras = require("../controllers/compras")

// Validaciones con express-validator
const validacionesDos = [
    body('telefono').notEmpty().withMessage('Tenés que ingresar un numero telefónico').bail()
                    .isMobilePhone().withMessage('Tiene que ser un numero de telefono válido'),
    body('direccion').notEmpty().withMessage('Tenés que ingresar una direccion de envío').bail(),
    body('localidad').notEmpty().withMessage('Tenés que ingresar una localidad'),
    body('provincia').notEmpty().withMessage('Tenés que ingresar una provincia'),
    body('codigopostal').notEmpty().withMessage('Tenés que ingresar un código postal').bail()
                        .isNumeric().withMessage('Debe ser un número de 4 digitos').bail()
                        .isLength({min:4, max:4}).withMessage('Debe ser un número de 4 digitos'),
  ];

  const validacionesTres = [
    body('numerotarjeta').notEmpty().withMessage('Tenés que ingresar un número').bail()
                        .isNumeric().withMessage('Debe ser un número de tarjeta válido').bail()
                        .isLength({min:16, max:16}).withMessage('Debe contener 16 digitos'),
    body('vencimiento').notEmpty().withMessage('Tenés que ingresar una fecha').bail()
                        .isDate().withMessage('Tenés que ingresar una fecha válida'),
    body('metododepago').notEmpty().withMessage('Debes seleccionar el tipo de tarjeta'),
    body('cvv').notEmpty().withMessage('Tenés que ingresar un número').bail()
                        .isNumeric().withMessage('Debe ser un número de 3 digitos').bail()
                        .isLength({min:3, max:3}).withMessage('Debe ser un número de 3 digitos')
  ]



router.get("/productCart", authMiddleware, compras.productCart)
router.get("/productCartDos",authMiddleware, compras.productCartDos)
router.get("/productCartTres",authMiddleware, compras.productCartTres)
router.get("/compraExitosa",authMiddleware, compras.compraExitosa)
router.post("/agregarCarrito/:id",authMiddleware,compras.comprarProducto);
router.post("/productCart", authMiddleware, compras.productCartpaso)
router.put("/productCartDos" , compras.productCartpasoDos)
router.post("/nuevaDireccion", [authMiddleware,validacionesDos], compras.nuevaDireccion)
router.post("/agregarTarjeta",[authMiddleware,validacionesTres], compras.agregarTarjeta)
router.put("/productCartTres", [authMiddleware], compras.productCartpasoTres)


module.exports = router