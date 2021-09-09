module.exports = function(sequelize, DataTypes) {
    const Product = sequelize.define("Product", {
        
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        jugador: {
            type: DataTypes.STRING,
            allowNull: false
        },
        equipo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numero_camiseta: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        descuento: {
            type: DataTypes.INTEGER,
        },
        imagen_frente: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagen_espalda: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        destacado: {
            type: DataTypes.INTEGER,
        },
        colors_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },{
        tableName: "products",
        tiemstamps: false
    
    })
    return Product
};