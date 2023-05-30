const express = require('express')
const app = express()
const port = 9000
const userRoute = require('./routes/userRoute')
const mongoose = require('mongoose')
require('dotenv').config()


// mongo db connection
mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (error)=>console.log(error))
db.once('open', () => console.log("Connected to Database successfully"))

app.use(express.json())
app.use('/api', userRoute)
app.listen(port, ()=>{
    console.log('server is running on port 9000')
})


