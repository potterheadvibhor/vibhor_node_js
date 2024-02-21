//updateroute
const express = require('express');
const router = express.Router();


const upadatedataroute = require('../controller/update');


router.put('/:id',upadatedataroute.update);

module.exports=router;