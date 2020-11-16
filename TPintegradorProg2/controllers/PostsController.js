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
        let primaryKey = req.params.id; 

        db.Post.findByPk(primaryKey, { 
            include: [ {association: 'posteoUser'} ]
         })
            .then( function(response){
                console.log(response)

                return res.render('detallePost', {response})
              // return res.send(response)
            })
            .catch(function (error){
                console.log(error)
             })
    },
    Editar: function(req, res) {
        let editar = req.params.id

        db.Post.findByPk(editar)
            .then(function(post){
                return res.render('editarPost', {post})
                //return res.send(post)
            })
            .catch(function (error){
                console.log(error)
            })
    },
    Update: function(req, res) {
        db.Post.update({
            titulo: req.body.title,
            url_de_la_imagen: req.body.changePost
        },
        {
            where: {
                id: req.params.id
            }
        })
       return res.redirect('/perfil')
       // return res.send(req.body)
    },
    Borrar: function (req, res) {
        let idBorrar = req.params.id;
        db.Post.destroy({
            where: {
                id: idBorrar
            }
        })
    return res.redirect('/')
    }
};

module.exports = postsController;