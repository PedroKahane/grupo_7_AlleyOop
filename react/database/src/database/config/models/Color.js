module.exports = function(sequelize, DataTypes) {
    const Color = sequelize.define("Color", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        paleta:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        tableName: "colores",
        tiemstamps: false
    
    });

    Color.associate = function(models) {
        Color.hasMany(models.Product, {
            as: "products",
            foreignKey: "colors_id"
        });
    }

    return Color

};