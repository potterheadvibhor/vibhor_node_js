//triggerroute
const express = require('express');
const router = express.Router();


const trigger = require('../controller/trigger');

router.get('/',trigger.get);


module.exports=router;