module.exports = function(sequelize, DataTypes) {
    const Compras= sequelize.define("compras", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            cantidad:{
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: null
            },
            precio_total:{
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            estado_producto:{
                type: DataTypes.INTEGER,
                defaultValue: 0
            },
            product_id:{
                type: DataTypes.BIGINT(10),
            },
            user_id:{
                type: DataTypes.BIGINT(10),
            },
            entrega_id:{
                type: DataTypes.BIGINT(10),
                defaultValue: null
            },
            metodo_id:{
                type: DataTypes.BIGINT(10),
                defaultValue: null
            }
    },{
        tableName: "compras",
        tiemstamps: false
    })
    Compras.associate = function(models){
        Compras.belongsTo(models.User, {
            as: "User",
            foreignKey: "user_id",
        })
        Compras.belongsTo(models.Product, {
            as: "product",
            foreignKey: "product_id",
        })
        Compras.belongsTo(models.entrega, {
            as: "entrega",
            foreignKey: "entrega_id",
        })
        Compras.belongsTo(models.metodo, {
            as: "metodo",
            foreignKey: "metodo_id",
        })
    }
    return Compras
}