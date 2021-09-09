const db = require('../database/models')
//const user = require('../models/user')

async function userLogged (req,res,next){
    res.locals.isLogged = false
    if(req.cookies.userEmail != undefined){
        try {
            let emailInCookie = req.cookies.userEmail
            let userFromCookie = await db.User.findOne(
                {
                    where: {
                        email : emailInCookie
                    }
                }
            )
            if(userFromCookie){
                req.session.userLogged = userFromCookie
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    if(req.session &&  req.session.userLogged){
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged

    }

    next()
}
module.exports = userLogged