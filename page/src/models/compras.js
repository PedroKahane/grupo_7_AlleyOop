const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const user = require('./user');
const producto = require('./product');
module.exports = {
    directory : path.resolve(__dirname,"../data","compras.JSON"),
    write: function(data){
      return fs.writeFileSync(this.directory,JSON.stringify(data,null,2))
    },
    all: function (){
      return JSON.parse(fs.readFileSync(this.directory))
    },
    allWithExtra: function () {
        let compras = this.all()
        compras.map(element => {
            element.productoId = producto.oneWithExtra(element.productoId);
            return element
        })
        compras.map(element => {
            element.userId = user.one(element.userId);
            return element
        })
        return compras
    },
    one: function(id){
      return this.all().find(user => user.id == id);
    },
    oneWithExtra: function (id) {
        let compras = this.allWithExtra();
        let resultado = compras.find(compra => compra.id == id)
        return resultado;
    },
    comprarProducto : function(idProducto, iduser){
        let compras = this.all();
        let nuevo = {
            id: compras.length > 0 ? compras[compras.length -1].id + 1: 1,
            productoId : idProducto,
            userId: iduser,
        }    
        compras.push(nuevo)
        this.write(compras);
        return nuevo;   
    },
    productCart: function (data, id) {
        let compras = this.all();;
        compras.map(compra => {
            if(compra.id == id ){
                compra.precio = data.precio,
                compra.cantidad = data.cantidad,
                compra.PrecioTotal = parseInt((data.cantidad * data.precio))
                compra.estadoProducto = "paso 1"
                return compra
            }
            return compra
        })
        this.write(compras)
        return true;
      },
    productoCartDos : function (data, id){
        let compras = this.all();;
        compras.map(compra => {
            if(compra.id == id ){
                compra.nombre = data.nombre,
                compra.apellido = data.apellido,
                compra.email = data.email,
                compra.telefono = data.telefono,
                compra.direccion = data.direccion,
                compra.localidad = data.localidad,
                compra.provincia = data.provincia,
                compra.codigopostal = data.codigopostal
                compra.estadoProducto = "paso 2"
                return compra
            }
            return compra
        })
        this.write(compras)
        return true;
    },
    productoCartTres : function (data, id){
        let compras = this.all();;
        compras.map(compra => {
            if(compra.id == id ){
                compra.metododepago = data.metododepago,
                compra.numerotarjeta = data.numerotarjeta,
                compra.vencimiento = data.vencimiento,
                compra.cvv = bcrypt.hashSync(data.cvv,10),
                compra.newsletter = data.newsletter,
                compra.estadoProducto = "Confirmado"
            }
            return compra
        })
        this.write(compras)
        return true;
    },
    cambioStatus: function (data, id){
        let compras = this.all();;
        compras.map(compra => {
            if(compra.id == id ){
                compra.estadoProducto = data.estadoProducto
            }
            return compra
        })
        this.write(compras)
        return true;
    },
    ultimoId : function(){
        let compras = this.all();
        return compras[compras.length -1].id
    },
    comprasPorUsuario: function(id) {
        let compras = this.allWithExtra()
        return compras.filter(compra => compra.userId.id == id)
    }
}