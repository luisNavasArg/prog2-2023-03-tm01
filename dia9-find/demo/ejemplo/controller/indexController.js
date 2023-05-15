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
        let criterio={where:[{id:id}]}
        Movie.findOne(criterio).then(function(data){
          return res.render("index",{title:"Con findOne",data:[data]});
       } ).catch(function(err){console.log(err)})
      },
      findByPk:(req,res)=>{
        let id = req.params.id;
        let relaciones={
          include:[
            {association:'genre'},
            {association:'actors'}
          ]
        }
        Movie.findByPk(id,relaciones).then(function(data){
          // let movie={
          //   id:title, `rating`, `awards`, `release_date`, `length`, `genre_id
          // }
          console.log(data);

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