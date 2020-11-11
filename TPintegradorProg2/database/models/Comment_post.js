module.exports = (sequelize, DataTypes) => {

    let cols = {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        comment_id:{
            type: DataTypes.INTEGER
        },
        post_id:{
            type: DataTypes.INTEGER
        }

    }


    let config = {
        tableName: "comment_post",
        timestamps: false
    }

    let comment_post = sequelize.define("Post", cols, config);

    comment_post.associate = function(models) {

        // posts.belongsToMany(models.Comentarios, {
        //     as: 'posteoComentario',
        //     through: 'comentarios',
        //     foreignKey: 'post_id'
        // })
    }


    return comment_post;
}
