module.exports = (sequelize, DataTypes) => {

    let cols = {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        post_id:{
            type: DataTypes.INTEGER
        },
        usuario_id:{
            type: DataTypes.STRING
        },
        texto:{
            type: DataTypes.STRING
        },
        fecha:{
            type: DataTypes.DATE
        },

    }


    let config = {
        tableName: "comentarios",
        timestamps: false
    }

    let comentarios = sequelize.define("comentarios", cols, config);

    return comentarios;
}