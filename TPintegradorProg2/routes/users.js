var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController')

router.get('/', usersController.index);
router.post('/logout', usersController.logout);

module.exports = router;
