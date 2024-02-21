const db = require('../helper/db');


    const deactivateProduct=(productId, is_active, callback) => {
        const Deactivate_PRODUCT_QUERY = 'UPDATE Product SET is_active=? WHERE id=?';

        db.query(Deactivate_PRODUCT_QUERY, [is_active, productId], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result.affectedRows);
            }
        });
    }
    module.exports={
        deactivateProduct
    };
