const Sequelize = require("sequelize"); // importar o sequelize
const connectionDB  = require("../config/database")

const Respostas = connectionDB.define("respostas", {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

})

Respostas.sync({force: false}).then(() => {})

module.exports = Respostas

