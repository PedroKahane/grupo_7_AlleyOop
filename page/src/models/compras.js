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
            cantidad : data.cantidad
        }    
        compras.push(nuevo)
        this.write(compras);
        return nuevo;    
    },
}