let express = require('express');
let router = express.Router();

let buscadorController = require('../controllers/buscadorController');

router.get('/', buscadorController.search);

module.exports = router;