require("dotenv").config();
const app =  require("./src/app")


app.listen(3000, ( error) => {

    console.log("Servidor inicializado ...")

})