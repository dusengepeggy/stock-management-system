var express = require('express');
var app = express();
require('dotenv').config();
var {connectdb }=require('./db/dbconnector')
var allroutes = require('./routes');

app.use(express.json());

connectdb();

app.use('/api',allroutes);

app.listen(process.env.PORT,()=>{
    console.log(`Listening on ${process.env.PORT}`);
})