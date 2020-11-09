let usersController = {
    index: function(req, res) {
        return res.render('logout')
    },
    logout: function(req, res) {
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = usersController;