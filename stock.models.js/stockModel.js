var mongoose = require('mongoose');

var Stock= mongoose.Schema({
    name:{
    type: String,
    require: true,
    unique: true,
    },

    quantity:{
        type: Number,
        require:true
    },

    measurements:{
        type:String,
        require: true,
        enum:{
            values:["PCS","GRAMS","LITRES","KGS"],
            message:"{value} is not a valid measurement.",
        }
    },

    pricePerUnit:{
        type: Number,
        require: true

    }




})

module.exports = mongoose.model('Stock',Stock);