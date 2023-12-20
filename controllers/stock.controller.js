var Stock= require('../stock.models.js/stockModel');

const addNew = async (req, res, next) => {

    try {
      var newItem = await Stock.create(req.body); 
      res.json({
            message:"Item saved successfully",
            newItem
        });
      
    } catch (error) {

        res.status(500).send(error);
    }

};


module.exports ={
    addNew
}