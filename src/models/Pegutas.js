const Sequelize = require("sequelize"); // importar o sequelize
const connectionDB  = require("../config/database")

const perguntas = connectionDB.define("perguntas", {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },

})

perguntas.sync({force: false}).then(() => {})

module.exports = perguntas

