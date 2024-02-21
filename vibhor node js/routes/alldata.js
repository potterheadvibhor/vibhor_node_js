const express = require('express');
const router = express.Router();


const alldataroute = require('../controller/alldata');

router.get('/',alldataroute.get);


module.exports=router;