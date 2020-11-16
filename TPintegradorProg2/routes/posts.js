let express = require('express');
let router = express.Router();

let postsController = require('../controllers/PostsController')

router.get('/', postsController.Index)
router.post('/agregar', postsController.Agregar);
router.get('/detalle/:id', postsController.Detalle);
router.get('/detalle/editar/:id', postsController.Editar);
router.post('/detalle/editar/:id', postsController.Update);
router.get('/detalle/borrar/:id', postsController.Borrar);


module.exports = router;