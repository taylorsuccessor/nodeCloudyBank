var express = require('express');
var router = express.Router();


    router.use('/admin',require('../middleware/admin/auth'),require('./admin/index'));
    router.use('/client',require('../middleware/client/auth'),require('./client/index'));

module.exports = router;
