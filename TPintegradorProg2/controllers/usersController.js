let usersController = {
    logout: function(req, res) {
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = usersController;