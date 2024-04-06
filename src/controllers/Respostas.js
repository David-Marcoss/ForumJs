const Respostas = require("../models/Respostas")

class RespostasControler{

    static create(req,res) {

        const corpo = req.body.corpo
        const perguntaId = req.body.perguntaId
    
    
        if ( corpo && perguntaId){
            Respostas.create({corpo, perguntaId})
                .then(()=> res.redirect(`/perguntas/${perguntaId}`))
                .catch(error => res.status(500).json({ menssage: "Erro ", error: `${error}` }))
        }else{
            res.status(400).json({ menssage: "Prencha os campos corretamente !!!" })
        }
    }
}

module.exports = RespostasControler