const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
module.exports = {
    directory : path.resolve(__dirname,"../data","compras.JSON"),
    write: function(data){
      return fs.writeFileSync(this.directory,JSON.stringify(data,null,2))
    },
    all: function (){
      return JSON.parse(fs.readFileSync(this.directory))
    },
    one: function(id){
      return this.all().find(user => user.id == id);
    },
    productCart: function (data) {
        let compras = this.all();
        let nuevo = {
            id: compras.length > 0 ? compras[compras.length -1].id + 1: 1,
            productoId : data.id,
            cantidad : data.cantidad,
            precio : data.precio,
            precioTotal: parseInt((data.precio * data.cantidad))
        }    
        compras.push(nuevo)
        this.write(compras);
        return nuevo;    
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
                compra.cvv = bcrypt.hashSync(data.cvv,10)
            }
            return compra
        })
        this.write(compras)
        return true;
    },
    ultimoId : function(){
        let compras = this.all();
        return compras[compras.length -1].id
    }
}