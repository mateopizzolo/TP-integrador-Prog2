var express = require('express');
var router = express.Router();

let loginController = require('../controllers/loginController');
router.get('/', loginController.index);
router.get('/register', loginController.register);


module.exports = router;
