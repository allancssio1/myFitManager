const express = require("express");
const bodyParser = require("body-parser")

const route = require("./routes/Client.routes");
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/client', route)

app.listen(3333, () => console.log('runnig'))