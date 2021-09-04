module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email:{
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            first_name:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            last_name:{
                type: DataTypes.STRING,
                allowNull: false
            },
            user_name:{
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            image:{
                type: DataTypes.STRING
            },
            admin:{
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            }
    },{
        tableName: "users",
        tiemstamps: false
    });
    return User
}