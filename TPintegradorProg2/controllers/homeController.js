const db = require('../database/models')

let homeController = {
    index: function(req, res) {
        let pedidoPost = db.Post.findAll({
            limit: 10,
            order: [ ['fecha', 'DESC'] ],
        //    include: [ {association: 'postPerfil'}]
        })
        let pedidoFotoPerfil = db.fotoPerfil.findAll({

        })
        Promise.all([pedidoPost, pedidoFotoPerfil])
            .then(
                function([posteos, fotoPerfil]){
                return res.render('home', {posteos:posteos, fotoPerfil:fotoPerfil});
                //return res.send({posteos:posteos, fotoPerfil:fotoPerfil});
            })
            .catch(function (error){
                console.log(error)
            }) 
    },
    perfil: function(req, res) {
        let primaryKey =  req.session.userLogueado.id; 

        db.User.findByPk(primaryKey, {
            include: [
                {association: 'posteos'}, {association: 'usuarioFoto'}
            ]
                })
            .then( function(result){
                console.log(result)

                return res.render('miPerfil', {result})
              //return res.send(result)
            })
            .catch(function (error){
                console.log(error)
             })    
    },
    editarPerfil: function(req, res) {
        let primaryKey = req.params.id; 

        db.User.findByPk(primaryKey)
            .then( function(result){
                console.log(result)

              return res.render('editarPerfil', {result})
              // return res.send(result)
            })
            .catch(function (error){
                console.log(error)
             })
    },
    cambiarFotoPerfil: function(req, res) {
        let perfilNueva = {
            foto: req.body.fotoPerfil,
            usuario_id: req.session.userLogueado.id
        }

        //db.User.create(perfilNueva)
        db.fotoPerfil.create(perfilNueva);

        //return res.send(req.body);
        return res.redirect('/perfil');
    }
}

module.exports = homeController;