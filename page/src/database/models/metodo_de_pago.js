module.exports = function(sequelize, DataTypes) {
    const metodo_de_pago= sequelize.define("metodo", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            metodo_de_pago:{
                type: DataTypes.STRING
            },
            numero_tarjeta:{
                type: DataTypes.INTEGER
            },
            vencimiento:{
                type: DataTypes.DATE
            },
            cvv:{
                type: DataTypes.STRING,
            },
            user_id:{
                type: DataTypes.BIGINT(10),
            },
    },{
        tableName: "metodo_de_pago",
        tiemstamps: false
    });

    metodo_de_pago.associate = function(models){
        metodo_de_pago.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id"
        })
        metodo_de_pago.hasMany(models.compras, {
            as: "compras",
            foreignKey: "metodo_id"
        })
    }
    return metodo_de_pago
}