var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

router.get('/', function(req, res) {
  res.render('logout');
});

router.post('/logout', usersController.logout);

module.exports = router;
