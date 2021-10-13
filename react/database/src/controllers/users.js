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
            attributes: ['id', 'email','first_name','last_name','user_name'],
        })
            res.json({
                count: users.length,
                data: { 
                    users: users,
                }
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
            res.json({
                user: user
            })
        } catch (error) {
            console.log(error);
        }
    }
}