let express = require('express');
let router = express.Router();

let usuarioController = require('../controllers/detalleUsuarioController');
router.get('/', usuarioController.index);

module.exports = router;