
const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const controller = require("../controllers/user");
const validLoggin = require("../middlewares/validLoggin");
const authMiddleware = require("../middlewares/authMiddleware")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname,"../../public/images/uploads","users"))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  });
  let upload = multer({ storage: storage })
  
  router.get("/login" ,validLoggin, controller.login)
  router.get("/register" ,validLoggin,controller.register)
  router.get("/profile" ,authMiddleware,controller.profile)
  router.put("/update",authMiddleware,controller.update);
  router.put("/avatar", [upload.single()],controller.avatar);
  router.get("/logout", controller.logout)
  router.post("/access",controller.access)



  module.exports = router