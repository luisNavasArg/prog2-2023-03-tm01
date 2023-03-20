const controlador ={
    index:function(req, res, next) {
        res.send('respond with a resource');
      },
    show:function (req,res) {
        const usersList=[
            {name:"Luis",lastName:"Navas"},
            {name:"Juan",lastName:"Perez"},
            {name:"Julian",lastName:"Perez"}
        ]
        res.render('users',{usersList:usersList})
        
    }
}
module.exports=controlador;