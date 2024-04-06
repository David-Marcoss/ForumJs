const Perguntas = require("../models/Pegutas")
const Respostas = require("../models/Respostas")

class PerguntasController{

    static perguntaForm (req,res){
        res.render("perguntar",)
    }
    
    static create (req,res){
    
        const titulo = req.body.titulo
        const descricao = req.body.descricao
    
        if ( titulo){
            Perguntas.create({titulo, descricao})
                .then(()=> res.redirect("/"))
                .catch(error => res.status(500).json({ menssage: "Erro ", error: `${error}` }))
        }else{
            res.status(400).json({ menssage: "Prencha os campos corretamente !!!" })
        }
    }
    
    static findOne (req,res){
        const id = req.params.id
    
        Perguntas.findOne({
            where: {id}
        }).then(
            pergunta => {
                if (pergunta){
    
                    Respostas.findAll({ 
                        where: {perguntaId: id},
                        order: [["id","DESC"]]
                    }).then( respostas => 
                        res.render("pergunta",{pergunta,respostas})
                    )
                }else{
                    res.redirect("/")
                }
            }
        )
    }
}

module.exports = PerguntasController