//jwtverifryroute
const express = require('express');
const router = express.Router();


const jwtverify = require('../controller/jwtverify');

router.get('/',jwtverify.get);


module.exports=router;