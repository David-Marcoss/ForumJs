const express = require("express")
const bodyParser = require("body-parser")
const connectionDB  = require("./config/database")
const routes = require("./routers/index")



//conexao com db
connectionDB.
        authenticate().then( () => {
            console.log("DB conectado...")
        }).catch( (error) => {
            console.log("Falha ao conectar DB: ",error)
        })

const app =  express()

// config uso do ejs( serve para gerar paginas html dinamicas)
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

// config arquivos estaticos
app.use(express.static('public'))

//config para obter dados body 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//adiciona rotas
routes(app)

module.exports = app