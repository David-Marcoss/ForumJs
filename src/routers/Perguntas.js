const express = require("express")
const PerguntasController = require("../controllers/Perguntas")

const routes = express.Router()

routes.get("/pergunta-form",PerguntasController.perguntaForm)
routes.get("/perguntas/:id/",PerguntasController.findOne)
routes.post("/perguntas",PerguntasController.create)


module.exports = routes