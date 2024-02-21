//udatetriggermodel
const db = require('../helper/db');
const uptrigger=(callback)=>{
    const  update_TRIGGER_QUERY = `CREATE TRIGGER after_product_update
    AFTER Update ON Product
    FOR EACH ROW
    BEGIN
        UPDATE count
        SET update_count = update_count + 1;
    END;`

db.query(update_TRIGGER_QUERY,(err,result)=>
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
    uptrigger,
};