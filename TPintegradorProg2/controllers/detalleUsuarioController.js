const db = require('../database/models')
const op = db.Sequelize.Op;


let usuarioController = {
    index: function(req, res) {
        return res.render('detalleUsuario');
    },
    search: function(req, res) {
        const search = req.query.searchName;
        db.User.findAll({
            where: [
                {username: { [op.like] : "%" + search + "%" }}
            ]
        })
            .then(
                function(resultados){
                    return res.render('resultadoBusqueda', {resultados})
            })
            .catch(function(error) {
                console.log(error)
            }) 
    },
    show: function(req, res) {
        let primaryKey = req.params.id; 

        db.User.findByPk(primaryKey, {
            include: [
                {association: 'posteos'}, {association: 'usuarioFoto'}
            ]
        })
        
            .then( function(response){
                console.log(response)

                return res.render('detalleusuario', {response})
              //return res.send(response)
            })
            .catch(function (error){
                console.log(error)
             })
    }
};

module.exports = usuarioController;