module.exports = (sequelize, DataTypes) => {

let cols = {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    foto:{
        type: DataTypes.STRING
    },
    usuario_id: {
        type: DataTypes.INTEGER
    }
}


let config = {
    tableName: "fotoPerfil",
    timestamps: false
}

let fotoPerfil = sequelize.define("fotoPerfil", cols, config);

// fotoPerfil.associate = function(models) {
//     fotoPerfil.hasMany(models.Post, {
//         as: 'postPerfil',
//         foreignKey: 'usuario_id',
//     })
    // fotoPerfil.hasMany(models.Post, {
    //     as: 'nidea',
    //     foreignKey: 'usuario_id'
    // })
    

    return fotoPerfil;
}

