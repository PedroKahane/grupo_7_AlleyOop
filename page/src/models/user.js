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
    let imagenFrente = path.resolve(__dirname,"../../public/uploads",updated.image)
    if(fs.existsSync(imagenFrente) && imagenFrente != "Default.png") {
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
    let imagenFrente = path.resolve(__dirname,"../../public/uploads",updated.image)
    if(fs.existsSync(imagenFrente) && imagenFrente != "Default.png") {
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

