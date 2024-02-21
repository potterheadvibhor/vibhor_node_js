const db = require('../helper/db');


    updateProduct= (productId, productData, callback) => {
        const { name, price, doa, is_active } = productData;
        const UPDATE_PRODUCT_QUERY = 'UPDATE Product SET name=?, price=?, doa=?, is_active=? WHERE id=?';

        db.query(UPDATE_PRODUCT_QUERY, [name, price, doa, is_active, productId], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result.affectedRows);
            }
        });
    }
module.exports=
    {updateProduct}