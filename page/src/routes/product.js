const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const product = require("../controllers/product");
const multer = require('multer');
const path = require('path')
const userAdmin = require("../middlewares/userAdmin")
const authMiddleware = require("../middlewares/authMiddleware")
let dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        cb(null, path.resolve(__dirname,"../../public/","uploads"))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:dest});
// Validaciones con express-validator
const validations = [
    body('precio').notEmpty().withMessage('Tenés que ingresar un Precio').bail()
                    .isNumeric().withMessage('Deebe ser un número'),
    body('descuento').notEmpty().withMessage('Tenés que ingresar el descuento que tiene el producto').bail()
                    .isNumeric().withMessage('Deebe ser un número'),
    body('equipo').notEmpty().withMessage('Tenés que ingresar un equipo'),
    body('colors').notEmpty().withMessage('Tenés que ingresar un color de camiseta'),
    body('jugador').notEmpty().withMessage('Tenés que ingresar un nombre de jugador'),
    body('numeroCamiseta').notEmpty().withMessage('Tenés que ingresar el numero de camiseta del jugador').bail()
                    .isNumeric().withMessage('Debe ser un número'),
    body('frente').custom((value, { req }) => {
      let file = req.files[0];
      let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];

      if (!file) {
        throw new Error('Tenés que subir una imagen');
      } else {
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(', ')}`);
        }
      }

      return true;

    }),
    body('espalda').custom((value, { req }) => {
        let file = req.files[1];
        let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
  
        if (!file) {
          throw new Error('Tenés que subir una imagen');
        } else {
          let fileExtension = path.extname(file.originalname);
          if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(', ')}`);
          }
        }
  
        return true;
  
      }),
      body('talles').notEmpty().withMessage('Tenés que ingresar minimo 1 talle').bail()
  ];

router.get("/tienda", product.tienda);
router.get("/filter", product.colors);
router.get("/create",userAdmin, product.create);
router.get("/productDetail/:id", product.product);
router.get("/edit/:id",userAdmin, product.edit);
router.get("/misCompras",authMiddleware, product.misCompras);


router.post("/save", [upload.any(), validations],product.save);
router.put("/update/:id",[upload.any(), validations],product.update);
router.delete('/delete/:id', product.delete);


module.exports = router