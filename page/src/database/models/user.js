module.exports = function(sequelize, DataTypes) {
    let alias = "User"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type: DataTypes.STRING
        },
        last_name:{
            type: DataTypes.STRING
        },
        user_name:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        image:{
            type: DataTypes.STRING
        },
        admin:{
            type: DataTypes.INTEGER
        }
    }
    let config = {
        tableName: "users",
        tiemstamps: false
    }
   

    let User = sequelize.define(alias, cols, config)
    User.associate = function(models){
        User.hasMany(models.compras, {
            as: "compras",
            foreignKey: "user_id"
        }),
        User.hasMany(models.metodo_de_pago, {
            as: "metodo_de_pago",
            foreignKey: "user_id"
        }),
        User.hasMany(models.entrega_compra, {
            as: "entrega_compra",
            foreignKey: "user_id"
        })
    }
}