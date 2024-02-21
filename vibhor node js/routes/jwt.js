const express = require('express');
const router = express.Router();

const token = require('../controller/jwt');

router.post('/', token.post);

module.exports = router;