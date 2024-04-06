const indexControler=  require("../controllers/index")
const Perguntas = require("./Perguntas")
const Respostas = require("./Respostas")

const routes = (app) => {
    app.route("/").get(indexControler.home)
    app.use(Perguntas,Respostas)
}

module.exports = routes