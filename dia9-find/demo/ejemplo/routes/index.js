var express = require('express');
var router = express.Router();
const indexController = require('../controller/indexController')
/* GET home page. */
router.get('/', indexController.index);
router.get('/one/:id',indexController.findOne);
router.get('/pk/:id',indexController.findByPk);
router.get('/genre/:genre',indexController.genre);
module.exports = router;
