let express = require('express');
let router = express.Router();

let postsController = require('../controllers/PostsController')

router.get('/', postsController.Index)
router.post('/agregar', postsController.Agregar);
router.get('/detalle/:id', postsController.Detalle);


module.exports = router;