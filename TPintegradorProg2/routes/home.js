let express = require('express');
let router = express.Router();

let homeController = require('../controllers/homeController');
router.get('/', homeController.index);
router.get('/perfil', homeController.perfil);
router.get('/perfil/editar/:id', homeController.editarPerfil);
router.post('/perfil/agregar', homeController.cambiarFotoPerfil);

module.exports = router;