const db = require('../database/models')

let postsController = {
    Index: function(req, res) {
        return res.render('agregarPost');
    },
    Agregar: function(req, res) {
        let post = {
            usuario_id: req.session.userLogueado.id,
            nombre_de_usuario: req.session.userLogueado.username,
            url_de_la_imagen: req.body.addPost,
            titulo: req.body.titulo,
            fecha: new Date(),
        }

        db.Post.create(post)
        return res.redirect('/');
    },
    Detalle: function(req, res) {
        return res.render('detallePost');
    }
};

module.exports = postsController;