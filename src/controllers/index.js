const Perguntas = require("../models/Pegutas")

class indexControler{
    static home (req,res) {
        Perguntas.findAll(
            {row:true,
            order: [
                ['id', "DESC"] // DESC: decrecente ESC: crescente
            ]})
            .then((perguntas) => {
            
            res.render("index",{
                perguntas
            })
        })
    }
}

module.exports = indexControler
