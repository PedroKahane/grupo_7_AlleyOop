module.exports = function(sequelize, DataTypes) {
    const Compras= sequelize.define("compras", {
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
    },{
        tableName: "compras",
        tiemstamps: false
    })
    Compras.associate = function(models){
        Compras.belongsTo(models.User, {
            foreignKey: "user_id",
        })
    }
    return Compras
}