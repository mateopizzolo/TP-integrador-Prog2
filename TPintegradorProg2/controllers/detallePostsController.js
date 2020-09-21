let postsController = {
    Agregar: function(req, res) {
        return res.render('agregarPost');
    },
    Detalle: function(req, res) {
        return res.render('detallePost');
    }
};

module.exports = postsController;