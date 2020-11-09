module.exports = (sequelize, DataTypes) => {

    let cols = {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        usuario_id:{
            type: DataTypes.INTEGER
        },
        nombre_de_usuario:{
            type: DataTypes.STRING
        },
        url_de_la_imagen:{
            type: DataTypes.STRING
        },
        titulo:{
            type: DataTypes.STRING
        },
        fecha:{
            type: DataTypes.DATE
        },

    }


    let config = {
        tableName: "posts",
        timestamps: false
    }

    let posts = sequelize.define("Post", cols, config);

    return posts;
}
