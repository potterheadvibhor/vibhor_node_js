const db = require('../helper/db');


 const  getAllProduct=(callback) => {
        const SELECT_PRODUCT_QUERY = 'SELECT * FROM Product';

        db.query(SELECT_PRODUCT_QUERY, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    };
module.exports={
    getAllProduct
};