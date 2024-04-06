const express = require("express")
const RespostasController = require("../controllers/Respostas")

const routes = express.Router()

routes.post("/respostas",RespostasController.create)



module.exports = routes