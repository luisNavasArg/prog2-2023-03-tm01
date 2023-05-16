const bcryptjs= require('bcryptjs');
const db = require('../database/models');
const User = db.User;
let controller={
    add:function(req, res) {
        res.render('addUser');
      },
      store:(req,res)=>{
        let passEncriptada= bcryptjs.hashSync(req.body.password,12);
        let user = {
            name:req.body.name,
            email:req.body.email,
            password:passEncriptada
        }
        User.create(user);
        res.redirect('/users');
      },
      login:(req,res)=>{
        res.render('login')
      },
      ingresar:(req,res)=>{
        let encriptada= bcryptjs.hashSync("123",12)
        let check= bcryptjs.compareSync(req.body.password,encriptada);
        res.send({clave:check})
      }
}
module.exports=controller