const bandas = require('../db/index')
const bandasControler ={
    lista:function(req, res, next) {
        res.render('listaBandas',{bandas:bandas.lista,criterio:'lista'});
      },
      show:function (req,res) {
        let id = req.params.id;
        for (let index = 0; index < bandas.lista.length; index++) {
            if(id == bandas.lista[index].id){
                return res.render('detalleBanda',{banda:bandas.lista[index]})
            }
            
        }
        return res.send('no existe la banda')
      },
      porGenero:function (req,res) {
        let genero = req.params.pepito;
        let bandasG = [];
        for (let i = 0; i < bandas.lista.length; i++) {
            if(bandas.lista[i].genero==genero){
                bandasG.push(bandas.lista[i]);
            }
            
        }
        if (bandasG.length==0) {
            return res.send('no existe ese genero');
        }else{
            return res.render('listaBandas',{bandas:bandasG,criterio:'genero'});
        }
      }

}
module.exports = bandasControler;