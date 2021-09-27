const path = require('path');
const db = require('../database/models');

const { validationResult } = require('express-validator');


module.exports = {
    index: async (req,res) => {
        try {
            let product = await db.Product.findAll({where: {destacado: 1}})
            res.render("index",{styles:"styles.css",  products: product })
        } catch (error) {
        console.log(error);
        }
    },
    contacto: (req,res) => res.render("contacto",{styles:"contacto.css"}),
    contactoForm: (req,res) => {
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            return res.render('contacto', {
                styles:"contacto.css", 
                errors: resultValidation.mapped(),
                oldData: req.body
            });
    } else{
        return res.redirect("/")
    }
    
}
}