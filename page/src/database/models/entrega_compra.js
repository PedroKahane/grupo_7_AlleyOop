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

    entrega_compra.associate = function(models){
        entrega_compra.belongsTo(models.User, {
            foreignKey: "user_id"
        })
    }
    return entrega_compra
}