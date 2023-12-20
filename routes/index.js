module.exports = stockRoute;
var stockRoute =require('./stock.routes');
var express=require('express');
var allroutes = express();

allroutes.use('/stock',stockRoute);


module.exports = allroutes  ;