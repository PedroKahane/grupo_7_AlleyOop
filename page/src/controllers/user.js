const userModel = require("../models/user");
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const user = require("../models/user");
module.exports = {
    login:(req,res) => res.render("users/login",{styles:"login.css"}),
    register:(req,res) => res.render("users/register",{styles:"login.css"}),
    access: (req,res) => {
        let userToLogin = userModel.findByEmail(req.body.email)
        if(userToLogin) {
            let passwordHash = bcrypt.compareSync(req.body.password, userToLogin.password)
            if(passwordHash){
                req.session.userLogged = userToLogin
                return res.redirect('/')
            }
            return res.render('users/login', {
                errors: {
                    password : {
                        msg: 'La contraseña es incorrecta'
                    }
                }, styles:"login.css"
        })
        }
        return res.render('users/login', {
                errors: {
                    email:{
                        msg: 'Las credenciales son Invalidas'
                    },
                }, styles:"login.css"
        })
    }
  }
