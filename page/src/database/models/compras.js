module.exports = function(sequelize, DataTypes) {
    const Compras= sequelize.define("Compras", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            cantidad:{
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1
            },
            precio_total:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            product_id:{
                type: DataTypes.BIGINT(10),
            },
            user_id:{
                type: DataTypes.BIGINT(10),
            },
    },{
        tableName: "compras",
        tiemstamps: false
    });

    Compras.asociate = function(models){
        Compras.belongsTo(models.User, {
            as: "User",
            foreignKey: "user_id"
        }),
        Compras.belongsTo(models.productos, {
            as: "products",
            foreignKey: "user_id"
        })
    }
    return Compras
}