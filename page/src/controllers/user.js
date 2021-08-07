const userModel = require("../models/user");
const { validationResult } = require('express-validator');
module.exports = {
    login:(req,res) => res.render("users/login",{styles:"login.css"}),
    register:(req,res) => res.render("users/register",{styles:"login.css"}),
    access: (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("users/login",{ errors: errors.mapped(),styles:"login.css", old:req.body});
        }else{
            let user = userModel.findByEmail(req.body.email);
        if(req.body.remember){
            res.cookie("email",req.body.email,{maxAge:300000})
        }
        req.session.user = user;
        return res.redirect("/")
    }
  }
}