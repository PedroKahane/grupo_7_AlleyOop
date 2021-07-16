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
        //productos.map(element => {
            //element.talles = element.talles.map(talle => {
              //  talle = talleModel.one(talle)
                //return talle
            //})
            //return element
        //})
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
    create: function (data,file) {
        let productos = this.all();
        let nuevo = {
            id: productos.length > 0 ? productos[productos.length -1].id + 1: 1,
            precio: data.precio,
            descuento: data.descuento,
            equipos: parseInt(data.equipos),
            jugador: data.jugador,
            numeroCamiseta: data.numeroCamiseta,
            color: parseInt(data.color),
            destacado: data.destacado
        }    
        productos.push(nuevo)
        fs.writeFileSync(this.directory,JSON.stringify(productos,null,2));
        return nuevo;    
    },
    edit: function (data,id) {
        let productos = this.all();
        let updated = this.one(id);
        // eliminamos la imagen de la carpeta upload
        productos.map(producto => {
            if(producto.id == id ){
                producto.precio = data.precio,
                producto.descuento = data.descuento,
                producto.equipos = parseInt(data.equipos),
                producto.jugador = data.jugador,
                producto.numeroCamiseta = data.numeroCamiseta,
                producto.color = parseInt(data.color),
                producto.destacado = data.destacado
                return producto
            }
            return producto
        })
        fs.writeFileSync(this.directory,JSON.stringify(productos,null,2));
        return true;
    }
}

module.exports = model;