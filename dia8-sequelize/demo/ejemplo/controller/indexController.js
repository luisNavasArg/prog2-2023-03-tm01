const db = require('../database/models');
const Movie = db.Movie;
const controller={
    
    index:function(req, res, next) {
        Movie.findAll().then(function(data){
           return res.send(data);
        } ).catch(function(err){console.log(err)})
        // res.render('index', { title: 'Express' });
      },
      
}
module.exports= controller;