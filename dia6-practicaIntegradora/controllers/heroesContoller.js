const personajes = require('../db/index')
const heroesController = {
    index:function (req,res) {
        return res.render("heroes",{personajes:personajes.lista})
    }
}
module.exports = heroesController