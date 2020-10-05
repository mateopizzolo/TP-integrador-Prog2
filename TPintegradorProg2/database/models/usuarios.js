module.exports = (sequelize, DataTypes) => {

    let cols = {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre_de_usuario:{
            type: DataTypes.STRING
        },
        fecha:{
            type: DataTypes.DATE
        }
    }


    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    let usuarios = sequelize.define("usuarios", cols, config);

    return usuarios;
}
