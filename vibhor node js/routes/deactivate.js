const express = require('express');
const router = express.Router();

const deactiveroute = require('../controller/deactivate');

router.post('/:id',deactiveroute.post);


module.exports=router;