var express = require('express');
var router = express.Router();
const controlador= require('../controllers/userController')
/* GET users listing. */
router.get('/', controlador.index);
router.get('/lista',controlador.show);

module.exports = router;
