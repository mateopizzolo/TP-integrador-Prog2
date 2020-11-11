const db = require('../database/models')

let homeController = {
    index: function(req, res) {
        db.Post.findAll({
            limit: 10,
            order: [ ['fecha', 'DESC'] ]
        })
        .then((response) => {
            console.log(response)
            return res.render('home', {response});
            //return res.send(response)
        })
    },
    perfil: function(req, res) {
        let primaryKey =  req.session.userLogueado.id; 

        db.User.findByPk(primaryKey, {
            include: [
                {association: 'posteos'}
            ]
                })
            .then( function(result){
                console.log(result)

                return res.render('miPerfil', {result})
             // return res.send(result)
            })
            .catch(function (error){
                console.log(error)
             })    
    }
}

module.exports = homeController;