module.exports = function(sequelize, DataTypes) {
    const Talle = sequelize.define("Talle", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        abreviatura:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        tableName: "talles",
        tiemstamps: false
    
    });

    Talle.associate = function(models) {
        Talle.belongsToMany(models.Product, {
            through: "product_talles",
            foreignKey: "talles_id",
            otherKey: "product_id",
            timestamps: false
        });
    }

    return Talle

};