let express = require('express');
let router = express.Router();

let postsControllers = require('../controllers/detallePostsController')

router.get('/agregar', postsControllers.Agregar);
router.get('/detalle', postsControllers.Detalle);


module.exports = router;