//deactivatedata
const ProductModel = require('../model/deactivate');

module.exports = {
    post: (req, res) => {
        const productId = req.params.id; 
        const { is_active } = req.body; 

        ProductModel.deactivateProduct(productId, is_active, (err, affectedRows) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                if (affectedRows > 0) {
                    res.status(200).json({ message: 'Product deactivated', productId: productId });
                } else {
                    res.status(404).json({ error: 'Product not found' });
                }
            }
        });
    }
};
