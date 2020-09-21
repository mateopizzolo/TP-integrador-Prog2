let homeController = {
    index: function(req, res) {
        return res.render('home');
    },
    perfil: function(req, res) {
        return res.render('miperfil');
    }
}

module.exports = homeController;