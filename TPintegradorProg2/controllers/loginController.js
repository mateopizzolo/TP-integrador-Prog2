let loginController = {
    index: function(req, res) {
        return res.render('login');
    },
    register: function(req, res) {
        return res.render('registracion');
    }
};

module.exports = loginController;