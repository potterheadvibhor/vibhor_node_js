//jwtrefressroute
const express = require('express');
const router = express.Router();


const jwtreferess = require('../controller/jwtreferess');

router.get('/',jwtreferess.get);


module.exports=router;