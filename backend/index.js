require('dotenv').config()
const path = require("path")
const express = require('express')
const cors = require('cors')
const app = express()
const personsRouter = require('./src/routes/persons')
const healthRouter = require('./src/routes/health')
const createUnixSocketPool = require('./src/db/db')

let db = null

const createDb = async () => {
    db = await createUnixSocketPool()
    db.migrate.latest()
}

createDb()

// run migrations when the app starts


const PORT = process.env.PORT || 8080

console.log("Environment:", process.env.NODE_ENV)
console.log(process.env.SERVE_STATIC)

if (process.env.SERVE_STATIC === "true"){
    console.log("Serve static files.")
    app.use(express.static("public"))
}

app.use(cors())
app.use(express.json())
app.use('/api/v1/', personsRouter)
console.log("Hello world, printing envs!")
console.log(process.env)
app.use('/health/', healthRouter)
app.listen(PORT, () => console.log("Server is listening to port", PORT))