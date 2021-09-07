module.exports = function(sequelize, DataTypes) {
    const entrega_compra= sequelize.define("entrega_compra", {
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
            coidgo_postal:{
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

    entrega_compra.asociate = function(models){
        entrega_compra.belongsTo(models.User, {
            as: "User",
            foreignKey: "user_id"
        })
    }
    return entrega_compra
}