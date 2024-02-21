//addtriggermodel
const db = require('../helper/db');
const addtrigger=(callback)=>{
    const  add_TRIGGER_QUERY = `CREATE TRIGGER after_product_insert
    AFTER INSERT ON Product
    FOR EACH ROW
    BEGIN
        UPDATE count
        SET add_count = add_count + 1;
    END;`

db.query(add_TRIGGER_QUERY,(err,result)=>
{
    if(err){
        callback(err,null);
    }
    else{
        callback(null,"add trigger created");
    }
});

};

module.exports={
    //addProduct,
    addtrigger,
};