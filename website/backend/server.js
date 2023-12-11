require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require ('./routes/userRoutes')
const postingRoutes = require('./routes/postingRoutes')


//express app
const app = express()

//middleware, parse json body for post request
app.use(express.json())


app.use((req, res, next) => {
    //LOG PATH AND REQUEST TYPE
    console.log(req.path, req.method)
    next()
})


//routes, fires router (carmonyRoutes) from carmonyRoutes file

//recieve and execute requests
app.use('/api/userRoutes', userRoutes)



//recieve and execute requests from posting page
app.use('/api/postingRoutes', postingRoutes)

//app.get('/', (req,res) => {

    //res.json({mssg:"welcome to the website"})

//})

//connect to db
mongoose.connect(process.env.MONGO_URI)
    //  once connected, listen for requests
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('CONNECTED. listening on port 4k')
        })
    })


    //if any error example wrong mongo uri
    .catch((error) =>{
        console.log(error)
    }
    )

