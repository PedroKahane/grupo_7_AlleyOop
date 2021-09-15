module.exports = function(sequelize, DataTypes) {
    const product_talle = sequelize.define("product_talles", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id:{
            type: DataTypes.BIGINT(10),
        },
        talles_id:{
            type: DataTypes.BIGINT(10),
        }
    },{
        tableName: "product_talles",
        tiemstamps: false
    
    });


    return product_talle

};