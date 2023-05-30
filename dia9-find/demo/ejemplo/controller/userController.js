const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const User = db.User;
let controller = {
  add: function (req, res) {
    res.render('addUser');
  },
  store: (req, res) => {
    //creamos el objeto vacío de errors
    let errors = {};
    //validamos que el campo name no esté vacío
    if (req.body.name == "") {
      //agregamos una propiedad y le asignamos el valor correspondiente
      errors.message = "El campo nombre está vacío";
      //Asignamos a locals.error el objeto errors 
      res.locals.errors = errors;
      //renderizamos la vista con el error
      res.render("addUser");
    } else if (req.body.email == "") {
      //agregamos una propiedad y le asignamos el valor correspondiente
      errors.message = "El campo email está vacío";
      //Asignamos a locals.error el objeto errors 
      res.locals.errors = errors;
      //renderizamos la vista con el error
      res.render("addUser");
    } else if (req.body.password == "") {
      //agregamos una propiedad y le asignamos el valor correspondiente
      errors.message = "El campo password está vacío";
      //Asignamos a locals.error el objeto errors 
      res.locals.errors = errors;
      //renderizamos la vista con el error
      res.render("addUser");
    } else {
      let criterio = {
        where: [{ email: req.body.email }]
      }
      User.findAll(criterio)
        .then(data => {
          //agregamos una propiedad y le asignamos el valor correspondiente
          errors.message = "El email ya existe!";
          //Asignamos a locals.error el objeto errors 
          res.locals.errors = errors;
          //renderizamos la vista con el error
          res.render("addUser");
        }).catch(error => console.log(error))

      let passEncriptada = bcryptjs.hashSync(req.body.password, 12);
      let user = {
        name: req.body.name,
        email: req.body.email,
        password: passEncriptada
      }
      User.create(user);
      res.redirect('/users');
    }

  },
  login: (req, res) => {
    res.render('login')
  },
  ingresar: (req, res) => {
    //creamos el objeto vacío de errors
    let errors = {};
    let info = req.body;
    let filtro={
      where:[{email:info.email}]
    };
    User.findOne(filtro)
    .then(result=>{
      if(result  !=null){
        let check = bcryptjs.compareSync(info.password, result.password);
        if(check){
          req.session.user = result.dataValues;
          req.locals.user = result.dataValues;
          if(info.rememberme){
            res.cookie("userId",result.dataValues.id,{maxAge:1000 *60 *10})
          }
          return res.redirect('/')
        }
        else{
          
          errors.message = "Contraseña no coincide";
          //Asignamos a locals.error el objeto errors 
          res.locals.errors = errors;
          //renderizamos la vista con el error
          res.render("addUser");
        }
      }
    })
    // let encriptada = bcryptjs.hashSync("123", 12)
    // let check = bcryptjs.compareSync(req.body.password, encriptada);
    // res.send({ clave: check })
  }
}
module.exports = controller