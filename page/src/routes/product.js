const express = require('express');
const router = express.Router();
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


router.get("/tienda", product.tienda);
router.get("/filter", product.colors);
router.get("/create",userAdmin, product.create);
router.get("/productDetail/:id", product.product);
router.get("/edit/:id",userAdmin, product.edit);
router.get("/misCompras",authMiddleware, product.misCompras);


router.post("/save", [upload.any()],product.save);
router.put("/update/:id",[upload.any()],product.update);
router.delete('/delete/:id', product.delete);


module.exports = router