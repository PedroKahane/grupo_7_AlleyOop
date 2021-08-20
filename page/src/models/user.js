const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
module.exports = {
  dir: path.resolve(__dirname,"../data","users.json"),
  write: function(data){
    return fs.writeFileSync(this.dir,JSON.stringify(data,null,2))
  },
  all: function (){
    return JSON.parse(fs.readFileSync(this.dir))
  },
  one: function(id){
    return this.all().find(user => user.id == id);
  },
  findByEmail: function (email){
    return this.all().find(user => user.email == email)
  },

  // Create Register
  getData: function (){
    return JSON.parse(fs.readFileSync(this.dir, 'utf-8'));
  }/* ,
  generateId: function () {
    let allUsers = this.all();
    let lastUser = allUsers.pop();
    if (lastUser) {
      return lastUser.id + 1;
    }
    return 1;
  } */,
  create: function (userData) {
    let allUsers = this.all();
    newUser = {
      id: allUsers.length > 0 ? allUsers[allUsers.length -1].id + 1: 1,
      ...userData
    }
    allUsers.push(newUser);
    this.write(allUsers);
    return newUser;

  },
  delete: function(id) {
    let allUsers = this.all();
    let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
    this.write(finalUsers);

  },
  findByPk: function (id) {
    let allUsers = this.all();
    let userFound = allUsers.find(oneUser => oneUser.id === id);
    return userFound
  },
  findByField: function (field, text) {
    let allUsers = this.all();
    let userFound = allUsers.find(oneUser => oneUser[field] === text);
    return userFound
  },
  comprarProducto : function(data, id){
    let users = this.all();
    users.map(user => {
      if(user.id == id){
        user.compras.camiseta_id = data.id
        user.compras.equipos = data.equipos.equipo,
        user.compras.color = data.color.color,
        user.compras.imagenFrente = data.imagenFrente,
        user.compras.precio = data.precio
        return user
      }
      return user
    })
    this.write(users)
  },
  update:function(data,id){
    let users = this.all();
    users.map(user => {
      if(user.id == id){
        user.firstName = data.firstName,
        user.lastName = data.lastName
        user.email = data.email;
        return user
      }
      return user
    });
    this.write(users)
  },
  avatar:function(file,id){
    let users = this.all();
    let updated = this.one(id)
    let imagenFrente = path.resolve(__dirname,"../../public/uploads/users",updated.image)
    if(fs.existsSync(imagenFrente) && updated.image != "Default.png") {
      fs.unlinkSync(imagenFrente)
    }
    users.map(user => {
      if(user.id == id){
        user.image = file.filename
        return user
      }
      return user
    });
    this.write(users)
  },
  avatarDefault: function(id){
    let users = this.all();
    let updated = this.one(id)
    let imagenFrente = path.resolve(__dirname,"../../public/uploads/users",updated.image)
    if(fs.existsSync(imagenFrente) && updated.image != "Default.png") {
      fs.unlinkSync(imagenFrente)
    }
    users.map(user => {
      if(user.id == id){
        user.image = "Default.png"
        return user
      }
      return user
    });
    this.write(users)
  }
}
