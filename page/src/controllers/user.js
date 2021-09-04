//const userModel = require("../models/user");
const productModel = require("../models/product");
const { validationResult } = require('express-validator');
const sequelize = require('sequelize')
const bcrypt = require('bcrypt');
let db = require("../database/models")
const {Op} = sequelize
const {like} = Op

module.exports = {
    login:(req,res) => 
    {
        res.render("users/login",{styles:"login.css"})
    },
    processRegister: async (req, res) => {
        
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            // eliminar imagen
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

        try{
            db.User.create( {
                email : req.body.email,
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                user_name:req.body.userName,
                password: bcrypt.hashSync(req.body.password, 10),
                image: req.file != undefined ? req.file.filename : "Default.png",
                admin: String(req.body.email).includes("@alleyoop") ? 1 : 0
            })
            return res.redirect('/user/login');

        } catch(error){
            return res.send(error)
        }
        
    

    },
    register:(req,res) => res.render("users/register",{styles:"login.css"}),
    access: async (req,res) => {
        let userToLogin = await db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        
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
                        msg: 'Las credenciales son Invalidas'
                    },
                }, styles:"login.css"
        })
    },
    profile:(req,res) => {
        res.render("users/profile",{styles:"profile.css", user: req.session.userLogged})
    },
    update: (req,res) => {
         const resultValidation = validationResult(req);

         if (!resultValidation.isEmpty()) {
            return res.render('users/profile', {
                styles:"profile.css", 
                user: req.session.userLogged, 
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } 
        //return res.send(req.body)
        let result = userModel.update(req.body,req.session.userLogged.id)
        return  res.redirect("/")
    },
    forgotPassword: (req,res) => {
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
           return res.render('users/profile', {
               styles:"profile.css", 
               user: req.session.userLogged, 
               errors: resultValidation.mapped(),
           });
       } 
       if(req.body.password != req.body.repeatPasword){
        return res.render('users/profile', {
            styles:"profile.css", 
            user: req.session.userLogged, 
            errors: {
                repeatPasword: {
                    msg: 'Las contraseñas no coinciden'}
            },
        });
    }
       let result = userModel.forgotPassword(req.body,req.session.userLogged.id)
       return  res.redirect("/")
   },
    avatar: (req,res) => {
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            return res.render('users/profile', {
                styles:"profile.css", 
                user: req.session.userLogged, 
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        
        let result = userModel.avatar(req.file,req.session.userLogged.id)
        return  res.redirect("/user/profile") 
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
