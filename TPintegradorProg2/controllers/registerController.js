const db = require('../database/models')
const bcrypt = require('bcryptjs');
//const users = db.User;

let registerController = {
    index: function(req, res){
        //if(req.session.user != undefined) {
        //    return res.redirect('/')
        //} else {
            return res.render('registracion')
        //}
    },
    store: function(req, res) {
        let user = {
            username: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            birthDate: req.body.birthDate
        }

        console.log(user)
        //return res.send(user)
        db.User.create(user);
        return res.redirect('/login')
    }
};

module.exports = registerController;