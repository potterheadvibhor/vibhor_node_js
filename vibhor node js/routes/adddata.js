const express = require('express');
const router = express.Router();

console.log("addroute");
const adddataroute = require('../controller/adddata');


router.post('/', adddataroute.post);

module.exports = router;
