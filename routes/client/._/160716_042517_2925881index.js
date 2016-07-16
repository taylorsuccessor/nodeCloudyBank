var express = require('express');
var router = express.Router();

router.use('/goods',require('../../middleware/client/goods'),require('./goods'));
router.use('/offers',require('../../middleware/client/offers'),require('./offers'));
router.use('/offers_comments',require('../../middleware/client/offers_comments'),require('./offers_comments'));
router.use('/goods_img',require('../../middleware/client/goods_img'),require('./goods_img'));
router.use('/comments',require('../../middleware/client/comments'),require('./comments'));
router.use('/raises',require('../../middleware/client/raises'),require('./raises'));
router.use('/purchases',require('../../middleware/client/purchases'),require('./purchases'));
router.use('/purchases_offers',require('../../middleware/client/purchases_offers'),require('./purchases_offers'));
router.use('/payments',require('../../middleware/client/payments'),require('./payments'));
router.use('/users',require('../../middleware/client/users'),require('./users'));
router.use('/users_details',require('../../middleware/client/users_details'),require('./users_details'));
router.use('/users_documents',require('../../middleware/client/users_documents'),require('./users_documents'));
router.use('/money_transfer',require('../../middleware/client/money_transfer'),require('./money_transfer'));
router.use('/charge_account',require('../../middleware/client/charge_account'),require('./charge_account'));
router.use('/financial_movement',require('../../middleware/client/financial_movement'),require('./financial_movement'));
module.exports = router;
