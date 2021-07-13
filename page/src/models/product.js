const path = require('path');
const fs = require('fs');
const color = require('./color.js');
const equipos = require('./equipos.js');
const talleModel = require('./talles.js');
const model = {
    directory : path.resolve(__dirname,"../data","productos.JSON"),
    all: function() {
        const file = fs.readFileSync(this.directory)
        const convert = JSON.parse(file)
        return convert
    },
    allWithExtra: function () {
        let productos = this.all();
        productos.map(element => {
            element.equipos = equipos.one(element.equipos);
            return element
        })
        productos.map(element => {
            element.talles = element.talles.map(talle => {
                talle = talleModel.one(talle)
                return talle
            })
            return element
        })
        productos.map(element => {
            element.color = color.one(element.color);
            return element
        })
        return productos 
    },
    one: function (id) {
        let productos = this.all();
        let resultado = productos.find(producto => producto.id == id)
        return resultado;
    },
    oneWithExtra: function (id) {
        let productos = this.allWithExtra();
        let resultado = productos.find(producto => producto.id == id)
        return resultado;
    },
    edit: function (data,id) {
        let productos = this.all();
        let updated = this.one(id);
        // eliminamos la imagen de la carpeta upload
        productos.map(producto => {
            if(producto.id == id ){
                producto.precio = data.precio,
                producto.descuento = data.descuento,
                producto.equipos = parseInt(data.equipo),
                producto.color = parseInt(data.colors),
                producto.jugador = data.jugador,
                producto.destacado = data.destacado,
                producto.talles = data.talles.map(talle => parseInt(talle)),
                producto.numeroCamiseta = data.numero
                return producto
            }
            return producto
        })
        fs.writeFileSync(this.directory,JSON.stringify(productos,null,2));
        return true;
    }
}

module.exports = model;