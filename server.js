require('dotenv').config()
const express = require("express")
const app = express()
const PORT =process.env.PORT || 5050
app.listen(() => console.log("Hello from the server side", PORT) )