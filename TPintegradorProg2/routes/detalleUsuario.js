let express = require('express');
let router = express.Router();

let usuarioController = require('../controllers/detalleUsuarioController');

router.get('/', usuarioController.index);
router.get('/detalle/:id', usuarioController.show);

module.exports = router;