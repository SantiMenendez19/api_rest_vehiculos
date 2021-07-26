// Importo express
const express = require("express")
const routes = require("./routes")
const path = require("path")

// Extraer variables de entorno
require("dotenv").config({ path : "variables.env"})

// Crear conexion a BD
const db = require("./config/db.js")

// Crear una App de express
const app = express()

// bodyParser
app.use(express.json())

// Routes
app.use("/", routes())

// Servidor y puerto
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 9000

// Escucho en el puerto 9000
app.listen(port, host, () => {
    console.log("El servicio esta funcionando correctamente")
})