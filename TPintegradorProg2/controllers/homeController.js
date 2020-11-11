const db = require('../database/models')

let homeController = {
    index: function(req, res) {
        db.Post.findAll({
            limit: 10,
        })
        .then((response) => {
            console.log(response)
            return res.render('home', {response});
        })
    },
    perfil: function(req, res) {
        return res.render('miperfil');
    }
}

module.exports = homeController;