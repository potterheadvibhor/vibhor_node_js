//adddata
//add trigger
const ProductModel = require('../model/adddata');
const ProductModel2 = require('../model/trigger');
console.log("addcontroller");
var count =1;

module.exports = {
    post: (req, res) => {
        const productData = req.body;
if(count<=1){
count=1+count;
    ProductModel2.addtrigger((err, result) => {
        if (err) {
            console.log(err);
        } else {
           console.log("trigger created");
        }
    });

}
else{
    console.log("trigger existed");
}

      
        ProductModel.addProduct(productData, (err, productId) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ message: 'Product added successfully', Id: productId });
            }
        });

       
    }
};