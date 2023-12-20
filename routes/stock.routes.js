var express= require('express');
var {addNew }=require('../controllers/stock.controller');
var stockRoute=express.Router();

stockRoute.use('/add',addNew);


module.exports = stockRoute;