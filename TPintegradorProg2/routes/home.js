let express = require('express');
let router = express.Router();

let homeController = require('../controllers/homeController');
router.get('/', homeController.index);
router.get('/perfil', homeController.perfil);


module.exports = router;