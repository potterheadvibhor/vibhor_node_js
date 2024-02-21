//updatedata
//updatetrigger
const ProductModel = require('../model/update');
const uProductModel = require('../model/utrigger');
var count=1;
const update=(req, res) => {
        //console.log(req.params);
        const productId = req.params.id; 
        const productData = req.body; 

        if(count<=1){
            count=1+count;
                uProductModel.uptrigger((err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                       console.log("trigger created");
                    }
                });
            
            }
else{
    console.log("trigger existed")
}

        ProductModel.updateProduct(productId, productData, (err, affectedRows) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                if (affectedRows > 0) {
                    res.status(200).json({ message: 'updated successfully', productId: productId });
                } else {
                    res.status(404).json({ error: 'Product not found' });
                }
            }
        });
    }
module.exports={update};
