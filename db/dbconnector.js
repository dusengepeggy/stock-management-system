var mongoose=require('mongoose');

const connectdb=()=>{
    return mongoose.connect(process.env.MONGOURL)
}


module.exports={connectdb};