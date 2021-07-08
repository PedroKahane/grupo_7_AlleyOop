const path = require('path');
const fs = require('fs');
const colorModel = require('./color.js');
const equipos = require('./equipos.js');
const talle = require('./talles.js');
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
        return productos 
    },
    one: function (id) {
        let productos = this.all();
        let resultado = productos.find(producto => producto.id == id)
        return resultado;
    }
}

module.exports = model;