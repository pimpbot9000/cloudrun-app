require('dotenv').config()
const path = require("path")
const express = require('express')
const cors = require('cors')
const app = express()
const personsRouter = require('./src/routes/persons')
const healthRouter = require('./src/routes/health')
//const db = require('./src/db/db')

// run migrations when the app starts
//db.migrate.latest()

const PORT = process.env.PORT || 8080

console.log("Environment:", process.env.NODE_ENV)
console.log(process.env.SERVE_STATIC)

if (process.env.SERVE_STATIC === "true"){
    console.log("Serve static files.")
    app.use(express.static("public"))
}

app.use(cors())
app.use(express.json())
//app.use('/api/v1/', personsRouter)
app.use('/health/', healthRouter)
app.listen(PORT, () => console.log("Server is listening to port", PORT))