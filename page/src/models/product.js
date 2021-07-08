const path = require('path');
const fs = require('fs');
const colorModel = require('./color.js');
const equiposModel = require('./equipos.js');
const imagenesModel = require('./imagenes.js');
const talleModel = require('./talles.js');
const model = {
    all: function() {
        const directory = path.resolve(__dirname,"../data","productos.JSON")
        const file = fs.readFileSync(directory,"utf-8")
        const convert = JSON.parse(file)
        return convert
    },
    allWithExtra: function () {
        let productos = this.all();
        productos.map(element => {
            element.equipos = equiposModel.one(element.equipos)
            return element
        }).map(element => {
            element.colors = element.colors.map(color => {
                color = colorModel.one(color)
                return color
            })
            return element
        }).map(element => {
            element.imagenes = imagenesModel.one(element.imagenes)
            return element
        }).map(element => {
            element.talles = element.talles.map(talle => {
                talle = talleModel.one(talle)
                return talle
            })
            return element
        })
        return productos;
    },
    one: function (id) {
        let productos = this.allWithExtra();
        let resultado = productos.find(producto => producto.id == id)
        return resultado;
    }
}

module.exports = model;