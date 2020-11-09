var express = require('express');
var router = express.Router();
let registerController = require('../controllers/registerController');

router.get('/', registerController.index);
router.post('/', registerController.store);

module.exports = router;
