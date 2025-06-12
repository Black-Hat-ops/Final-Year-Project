//envivornment variable 
const dotenv = require('dotenv')
dotenv.config();

const cookieParser = require('cookie-parser');
//used cookie-parser for cookies

//used express module for Routing
const express = require('express')
const app = express();

const userRoutes = require('./routes/user.routes')
//used userRoutes for Routing

const captainRoutes = require('./routes/captain.routes')
//used captainRoutes for Routing

const cors = require('cors');
const connectToDb = require('./db/db');

connectToDb();

app.use(cors());

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use(cookieParser());

app.get('/' , (req,res)=>{

    res.send('Hello World...!')
})

//used userRoutes for Routing
app.use('/user' , userRoutes);

app.use('/captain' , captainRoutes);
//used captainRoutes for Routing


module.exports = app