var express = require('express');
var router = express.Router();
let loginController = require('../controllers/loginController');

router.get('/', loginController.index);
router.post('/', loginController.login);


module.exports = router;
