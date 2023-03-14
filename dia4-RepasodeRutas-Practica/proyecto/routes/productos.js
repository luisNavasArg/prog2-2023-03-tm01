const express = require('express');
const router = express.Router();
const autos = require('../db/index')
router.get('/',function(req,res){
    return res.send(autos.lista)
})

router.get('/products/branch/:branch',function(req,res){
    let marca = req.params.marca;
    let resultados =[]
    for (let i = 0; i < autos.lista.length; i++) {
        if(autos.lista[i].marca== marca){
            resultados.push(autos.lista[i])
        }
    }
    if(resultados.length==0){
        return res.send("no hay autos de la marca "+ req.params.branch)
    }
    return res.send(resultados);
})
module.exports = router;
