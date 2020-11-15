let express = require('express');
let router = express.Router();

let postsController = require('../controllers/PostsController')

router.get('/', postsController.Index)
router.post('/agregar', postsController.Agregar);
router.get('/detalle/:id', postsController.Detalle);
router.get('/detalle/editar/', postsController.Editar);
router.get('/detalle/editar/:id', postsController.Editar2);
router.get('/detalle/borrar/:id', postsController.Borrar);


module.exports = router;