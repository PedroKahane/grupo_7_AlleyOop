const userModel = require("../models/user");
const productModel = require("../models/product");
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

module.exports = {
    login:(req,res) => 
    {
        res.render("users/login",{styles:"login.css"})
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            return res.render('users/register', {
                styles:"login.css", 
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userInDB = userModel.findByField('email', req.body.email);

        if(userInDB) {
            return res.render('users/register', {
              errors: {
                  email: {
                      msg: 'Este mail ya está registrado'
                  }
              },
              oldData: req.body,
              styles:"login.css"   
            });
        }

        let userToCreate = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            image: req.file.filename,
            admin: String(req.body.email).includes("@alleyoop") ? true: false
        }
        
        let userCreated = userModel.create(userToCreate);
        return res.redirect('/user/login');

    },
    register:(req,res) => res.render("users/register",{styles:"login.css"}),
    access: (req,res) => {
        let userToLogin = userModel.findByEmail(req.body.email)
        if(userToLogin) {
            let passwordHash = bcrypt.compareSync(req.body.password, userToLogin.password)
            if(passwordHash){
                req.session.userLogged = userToLogin
                
                if(req.body.rememeber_user){
                    res.cookie('userEmail', req.body.email, {maxAge : 1000* 60 *60 * 24 * 4 })
                }
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
                        msg: 'Las credenciales son inválidas'
                    },
                }, styles:"login.css"
        })
    },
    profile:(req,res) => {
        res.render("users/profile",{styles:"profile.css", user: req.session.userLogged})
    },
    update: (req,res) => {
        let result = userModel.update(req.body,req.session.userLogged.id)
        return  res.redirect("/") 
    },
    avatar: (req,res) => {
        let result = userModel.avatar(req.file,req.session.userLogged.id)
        return  res.redirect("/") 
    },
    avatarDefault: (req,res) => {
        let result = userModel.avatarDefault(req.session.userLogged.id)
        return  res.redirect("/") 
    },    
    logout: (req,res) =>{
        req.session.destroy();
        res.clearCookie('userEmail')
        return res.redirect("/")
    },
  }
