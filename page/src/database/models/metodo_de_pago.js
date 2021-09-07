module.exports = function(sequelize, DataTypes) {
    const metodo_de_pago= sequelize.define("metodo_de_pago", {
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
        tableName: "metodo_de_pagoas",
        tiemstamps: false
    });

    metodo_de_pago.asociate = function(models){
        metodo_de_pago.belongsTo(models.User, {
            as: "User",
            foreignKey: "user_id"
        })
    }
    return metodo_de_pago
}