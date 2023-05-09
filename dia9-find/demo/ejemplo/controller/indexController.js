const db = require('../database/models');
const Movie = db.Movie;
const controller={
    
    index:function(req, res, next) {
        Movie.findAll().then(function(data){
           return res.render("index",{title:"mi título",data:data});
        } ).catch(function(err){console.log(err)})
        // res.render('index', { title: 'Express' });
      },findOne:function(req,res){
        let id = req.params.id;
        Movie.findOne({where:[{id:id}]}).then(function(data){
          return res.render("index",{title:"Con findOne",data:[data]});
       } ).catch(function(err){console.log(err)})
      },
      findByPk:(req,res)=>{
        let id = req.params.id;
        Movie.findByPk(id).then(function(data){
          return res.render("index",{title:"Por clave primaria",data:[data]});
       } ).catch(function(err){console.log(err)})
      },
      genre:(req,res)=>{
        let genre=req.params.genre;
        let criterio = {where:[{genre_id:genre}]};
        Movie.findAll(criterio).then(function(data){
          return res.render("index",{title:"Por generos",data:data});
       } ).catch(function(err){console.log(err)})
      }
}
module.exports= controller;