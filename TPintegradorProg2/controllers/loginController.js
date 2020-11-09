const db = require('../database/models')
const bcrypt = require('bcryptjs');
const users = db.User;

let loginController = {
    index: function(req, res){
        //if(req.session.user != undefined) {
        //    console.log(req.session.user)
        //    return res.redirect('/')
        //} else {
            return res.render('login')
        //}
    },
    login: function(req, res) {
        //encontrar el email
        db.User.findOne({
            where: [{ username: req.body.username}]
        })
        //chequear que la contrasena coincida
        .then( function(user){
           // console.log(user)
            if(user == null) {
                return res.send("Usuario incorrecto")
            } else if  (bcrypt.compareSync(req.body.password, user.password) == false) {
                return res.send("contrasena incorrecto")
            } 
            else if (bcrypt.compareSync(req.body.password, user.password)) {
                req.session.userLogueado = user
                if (req.body.rememberme != undefined) {
                    res.cookie('userLogged', user.id, {maxAge: 20 * 1000})
                }
                return res.redirect('/');
             }
             })
             .catch(error => console.log(error))
    }
};

module.exports = loginController;