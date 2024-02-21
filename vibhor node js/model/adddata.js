const db = require('../helper/db');
console.log("addmodel");
const addProduct = 
    (productData, callback) => {
        const { name, price, doa, is_active } = productData;
        const INSERT_PRODUCT_QUERY = 'INSERT INTO Product (name, price, doa, is_active) VALUES (?, ?, ?, ?)';

        db.query(INSERT_PRODUCT_QUERY, [name, price, doa, is_active], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result.insertId);
            }
        });
    };


module.exports={
    addProduct,
};