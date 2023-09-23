require('dotenv').config()
const express = require("express")
const app = express()
const peopleController = require('./controller/peopleController')
const morgan = require('morgan')  //checkout morgan documentation

app.use(morgan('tiny'))
app.use(express.urlencoded({extended:true}))
app.use('/people', peopleController)
const PORT =process.env.PORT || 5050
app.listen(PORT, () => console.log("Hello from the server side", PORT) )