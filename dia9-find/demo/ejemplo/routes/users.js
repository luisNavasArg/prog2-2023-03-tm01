var express = require('express');
var router = express.Router();
const userController=require('../controller/userController')
/* GET users listing. */
router.get('/', userController.add);
router.post('/addUser',userController.store);
router.get('/login',userController.login);
router.post('/login',userController.ingresar);

module.exports = router;
