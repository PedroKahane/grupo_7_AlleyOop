//const userModel = require("../models/user");
//const productModel = require("../models/product");
const { validationResult } = require('express-validator');
const path = require('path')
const fs = require('fs')
const sequelize = require('sequelize')
const bcrypt = require('bcrypt');
let db = require("../database/models/index");
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
            if(req.file){
                let imagenFrente = path.resolve(__dirname,"../../public/uploads/users/",req.file.filename)
                if(fs.existsSync(imagenFrente) && req.file.filename != "Default.png") {
                    fs.unlinkSync(imagenFrente)
                }
            }
            return res.render('users/register', {
                styles:"login.css", 
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        try {
            let userInDB = await db.User.findOne(
                {
                    where: { 
                        email: req.body.email
                    }
                })
                if(userInDB) {
                    let imagenFrente = path.resolve(__dirname,"../../public/uploads/users/",req.file.filename)
                    if(fs.existsSync(imagenFrente) && req.file.filename != "Default.png") {
                        fs.unlinkSync(imagenFrente)
                    }
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
        } catch (error) {
            console.log(error)
        }
        try {
            let userInDB = await db.User.findOne(
                {
                    where: { 
                        user_name: req.body.userName
                    }
                })
                if(userInDB) {
                    if(fs.existsSync(imagenFrente) && req.file.filename != "Default.png") {
                        fs.unlinkSync(imagenFrente)
                    }
                    return res.render('users/register', {
                      errors: {
                        userName: {
                              msg: 'Este nombre de usuario ya existe, pruebe con otro'
                          }
                      },
                      oldData: req.body,
                      styles:"login.css"   
                    });
                }
        } catch (error) {
            console.log(error)
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
        try{
            db.User.update( {
                email : req.body.email,
                first_name: req.body.firstName,
                last_name: req.body.lastName,
            }, {
                where: {
                    id: req.session.userLogged.id
                }
            })
            return res.redirect('/');

        } catch(error){
            return res.send(error)
        }
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
    try{
        db.User.update( {
            password: bcrypt.hashSync(req.body.password, 10),
        }, {
            where: {
                id: req.session.userLogged.id
            }
        })
        return res.redirect('/');

    } catch(error){
        return res.send(error)
    }
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
        } else{
            let imagenFrente = path.resolve(__dirname,"../../public/uploads/users",req.session.userLogged.image)
            if(fs.existsSync(imagenFrente) && req.session.userLogged.image != "Default.png") {
              fs.unlinkSync(imagenFrente)
            }
        }
        
        try{
            db.User.update( {
                image: req.file != undefined ? req.file.filename : "Default.png",
            }, {
                where: {
                    id: req.session.userLogged.id
                }
            })
            return res.redirect('/');
    
        } catch(error){
            return res.send(error)
        }
    },
    avatarDefault: (req,res) => {
    let imagenFrente = path.resolve(__dirname,"../../public/uploads/users",req.session.userLogged.image)
    if(fs.existsSync(imagenFrente) && req.session.userLogged.image != "Default.png") {
      fs.unlinkSync(imagenFrente)
    }
        try{
            db.User.update( {
                image:  "Default.png",
            }, {
                where: {
                    id: req.session.userLogged.id
                }
            })
            return res.redirect('/');
    
        } catch(error){
            return res.send(error)
        }
    },    
    logout: (req,res) =>{
        req.session.destroy();
        res.clearCookie('userEmail')
        return res.redirect("/")
    },
  }
