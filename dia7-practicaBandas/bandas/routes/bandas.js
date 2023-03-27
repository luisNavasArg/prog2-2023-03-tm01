var express = require('express');
var router = express.Router();
const bandasControler = require("../controllers/bandasController")
/* GET users listing. */
router.get('/', bandasControler.lista);
router.get('/detalle/:id',bandasControler.show)
router.get('/genero/:pepito',bandasControler.porGenero);

module.exports = router;