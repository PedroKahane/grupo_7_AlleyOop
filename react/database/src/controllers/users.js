const path = require('path')
const fs = require('fs')
const sequelize = require('sequelize')
const db = require("../database/config/models/index")
const {Op} = sequelize
const {like} = Op

module.exports = {
    list: async (req,res) =>  {
        try {
            let users = await db.User.findAll({
            attributes: ['id', 'admin', 'email','first_name','last_name','user_name'],

        })
            let lastUser = await db.User.findAll({ attributes: ['id', 'email','first_name','last_name','user_name'], 
            limit: 1, order: [
            ['id', 'DESC']
        ]})
            let userAdmin = []
            let usuarios = []
            users.forEach(element => {
                users = {
                    id : element.id,
                    admin : element.admin,
                    email : element.email,
                    firstName : element.first_name,
                    lastName : element.last_name,
                    userName : element.user_name,
                    url : "http://localhost:3001/users/" + element.id 
                }
                usuarios.push(users)
                if (users.admin > 0) {
                    userAdmin.push(users)
                }
            })
            res.json({
                countAdmins: userAdmin.length,
                count: usuarios.length,
                data: { 
                    users: usuarios,
                },
                lastUser: lastUser,
            
            })
        } catch (error) {
           console.log(error); 
        }
    }  ,
    show: async (req,res) => {
        try {
            let user = await db.User.findByPk(req.params.id, {
                attributes: ['id', 'email','first_name','last_name','user_name','image', 'createdAt', 'updatedAt']
            })
            usuario = {
                id : user.id,
                email : user.email,
                firstName : user.first_name,
                lastName : user.last_name,
                userName : user.user_name,
                imagen : "http://localhost:3001/uploads/users/" + user.image,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,

            }
            res.json({
                user: usuario
            })
        } catch (error) {
            console.log(error);
        }
    }
}