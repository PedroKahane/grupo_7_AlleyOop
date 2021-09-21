const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const main = require("../controllers/main")
const validaciones = [
    body('mail').notEmpty().withMessage('Tenés que ingresar un correo electrónico').bail()
        .isEmail().withMessage('Debes ingresar un formato de correo válido'),
    body('name').notEmpty().withMessage('Tenés que ingresar tu nombre y apellido'),
    body('comentario').notEmpty().withMessage('Tenés que ingresar un comentario').bail()
        .isLength({min:10, max:200}).withMessage('Debe contener entre 10 y 200 caracteres'),
  ];

router.get("/", main.index)
router.get("/contacto", main.contacto)
router.post("/contacto",[validaciones], main.contactoForm)




module.exports = router