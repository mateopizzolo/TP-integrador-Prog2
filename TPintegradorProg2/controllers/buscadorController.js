const db = require('../database/models')
const op = db.Sequelize.Op;


let buscadorController = {
    search: function(req, res) {
        const search = req.query.searchName;
        let pedidoUser = db.User.findAll({
            where: [
                {username: { [op.like] : "%" + search + "%" }}
            ]
        })
        let pedidoPost = db.Post.findAll({
            where: [
                {titulo: { [op.like] : "%" + search + "%" }}
            ],
            limit: 20,
            order: [
                ['fecha', 'ASC']
            ]
        })
        Promise.all([pedidoUser, pedidoPost])
            .then(
                function([usuarios, posteos]){
                    return res.render('resultadoBusqueda', {usuarios:usuarios, posteos:posteos})
                    //return res.send({usuarios:usuarios, posteos:posteos})
            })
            .catch(function(error) {
                console.log(error)
            }) 
    }
}

module.exports = buscadorController;