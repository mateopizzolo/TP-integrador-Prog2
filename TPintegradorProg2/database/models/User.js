module.exports = (sequelize, DataTypes) => {

    let cols = {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username:{
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        birthDate: {
            type: DataTypes.DATE
        }
    }


    let config = {
        tableName: "User",
        timestamps: false
    }

    let User = sequelize.define("User", cols, config);

    User.associate = function(models) {
        User.hasMany(models.Post, {
            as: 'posteos',
            foreignKey: 'usuario_id',
        })
    }

    return User;
}
