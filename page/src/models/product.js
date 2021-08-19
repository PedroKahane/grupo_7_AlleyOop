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
    findByColors: function (color){
        return this.allWithExtra().filter(product => product.color.id == color)
    },
    filterByColors: function (colores){
        let color = []
        if(isNaN(colores)){
        return colores.map(color => 
            this.findByColors(color)
        )}
        else{
            color.push(colores)
            return color.map(color => 
                this.findByColors(color)
            )
        }
    },
    filtrarPorPrecio: function(num,minOmax){
        if(minOmax == "max"){
            return this.allWithExtra().filter(product => product.precio <= num)
        } else if(minOmax == "min"){
        return this.allWithExtra().filter(
            product => product.precio >= num
        )}
    },
    create: function (data,archivos) {
        let productos = this.all();
        let imagenDefault = null;
        let imagenFrente = archivos != undefined ? archivos.find(archivo => archivo.fieldname == 'frente') : imagenDefault;
        let imagenEspalda = archivos != undefined ? archivos.find(archivo => archivo.fieldname == 'espalda') : imagenDefault;
        let nuevo = {
            id: productos.length > 0 ? productos[productos.length -1].id + 1: 1,
            precio: data.precio,
            descuento: data.descuento,
            equipos: parseInt(data.equipo),
            jugador: data.jugador,
            numeroCamiseta: data.numeroCamiseta,
            color: parseInt(data.colors),
            destacado: data.destacado,
            imagenFrente: imagenFrente != null ? imagenFrente.filename : imagenDefault,
            imagenEspalda: imagenEspalda != null ? imagenEspalda.filename : imagenDefault,
            talles: data.talles.map(talle => parseInt(talle)),
            descripción: data.descripciones,
        }    
        productos.push(nuevo)
        fs.writeFileSync(this.directory,JSON.stringify(productos,null,2));
        return nuevo;    
    },
    edit: function (data,files,id) {
        let productos = this.all();
        let updated = this.one(id);
        let imagenFrente = path.resolve(__dirname,"../../public/uploads",updated.imagenFrente)
        let imagenEspalda = path.resolve(__dirname,"../../public/uploads",updated.imagenEspalda)
        // eliminamos la imagen de la carpeta upload
        if(fs.existsSync(imagenFrente)) {
            fs.unlinkSync(imagenFrente)
        }
        if(fs.existsSync(imagenEspalda)) {
            fs.unlinkSync(imagenEspalda)
        }
        productos.map(producto => {
            if(producto.id == id ){
                producto.precio = data.precio,
                producto.descuento = data.descuento,
                producto.equipos = parseInt(data.equipo),
                producto.jugador = data.jugador,
                producto.numeroCamiseta = data.numero,
                producto.color = parseInt(data.colors),
                producto.imagenFrente = files[0].filename,
                producto.imagenEspalda = files[1].filename,
                producto.destacado = data.destacado,
                producto.talles = data.talles.map(talle => parseInt(talle)),
                producto.descripción = [data.descripción1, data.descripción2]
                return producto
            }
            return producto
        })
        fs.writeFileSync(this.directory,JSON.stringify(productos,null,2));
        return true;
    },
    delete: function (id) {
        let productos = this.all();
        let deleted = this.one(id);
        // eliminamos la imagen de la carpeta upload

        let existImagenFrente = fs.existsSync(path.resolve(__dirname,"../../public/uploads",deleted.imagenFrente));
        let existImagenEspalda = fs.existsSync(path.resolve(__dirname,"../../public/uploads",deleted.imagenEspalda));
        
        if(existImagenFrente && deleted.imagenFrente.indexOf("default") != 0){
        fs.unlinkSync(path.resolve(__dirname,"../../public/uploads",deleted.imagenFrente));
        }
        if(existImagenEspalda && deleted.imagenEspalda.indexOf("default") != 0){
        fs.unlinkSync(path.resolve(__dirname,"../../public/uploads",deleted.imagenEspalda));
        }

        // filtarmos el producto que deaseamos eliminar
        productos = productos.filter(producto => producto.id != deleted.id )
        fs.writeFileSync(this.directory,JSON.stringify(productos,null,2));
        return true;
    }
}

module.exports = model;