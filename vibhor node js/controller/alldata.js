//view all data
const ProductModel = require('../model/alldatta');
module.exports={
   
get: (req, res) => {
    
ProductModel.getAllProduct((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json( result);
      }
    });
  }}