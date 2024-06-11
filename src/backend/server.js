const express = require("express");
const mongoose = require('mongoose')
const bodyParser= require('body-parser')
const cors = require('cors');
require('donenv').configs();
const userRouter = require('./routes/User')

const app = express();

app.use(bodyParser.json())      //to send json format data
app.use(cors());        //This control is essential for security.
app.use(express.json());           

app.use('/user',userRouter);

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection

connection.once('open',()=>{
    console.log('MonoDB Connected successfully'); //connect to the databse if there is no error

})
connection.on('error',()=>{
    console.log(`error with connecting MongoDB`); //if there is an error console.log  it
})

const port = process.env.PORT || 8082
app.listen(port ,()=>{
    console.log("listening")
})