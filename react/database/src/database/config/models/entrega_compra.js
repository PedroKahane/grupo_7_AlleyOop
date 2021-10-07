module.exports = function(sequelize, DataTypes) {
    const entrega_compra= sequelize.define("entrega", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            direccion:{
                type: DataTypes.STRING
            },
            provincia:{
                type: DataTypes.STRING
            },
            localidad:{
                type: DataTypes.STRING
            },
            codigo_postal:{
                type: DataTypes.INTEGER,
            },
            telefono:{
                type: DataTypes.INTEGER,
            },
            user_id:{
                type: DataTypes.BIGINT(10),
            },
    },{
        tableName: "entrega_compra",
        tiemstamps: false
    });

    entrega_compra.associate = function(models){
        entrega_compra.belongsTo(models.User, {
            as: "User",
            foreignKey: "user_id"
        })
        entrega_compra.hasMany(models.compras, {
            as: "compras",
            foreignKey: "entrega_id"
        })
    }
    return entrega_compra
}