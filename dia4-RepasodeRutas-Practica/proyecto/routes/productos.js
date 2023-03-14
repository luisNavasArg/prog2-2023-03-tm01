const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    return res.send("Hola estamos en productos")
})

router.get('/id/:id',function(req,res){
    return res.send(req.params.id);
})
module.exports = router;
