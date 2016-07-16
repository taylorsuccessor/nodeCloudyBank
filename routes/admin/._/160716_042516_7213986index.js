var express = require('express');
var router = express.Router();

router.use('/goods',require('../../middleware/admin/goods'),require('./goods'));
router.use('/offers',require('../../middleware/admin/offers'),require('./offers'));
router.use('/offers_comments',require('../../middleware/admin/offers_comments'),require('./offers_comments'));
router.use('/goods_img',require('../../middleware/admin/goods_img'),require('./goods_img'));
router.use('/comments',require('../../middleware/admin/comments'),require('./comments'));
router.use('/raises',require('../../middleware/admin/raises'),require('./raises'));
router.use('/purchases',require('../../middleware/admin/purchases'),require('./purchases'));
router.use('/purchases_offers',require('../../middleware/admin/purchases_offers'),require('./purchases_offers'));
router.use('/payments',require('../../middleware/admin/payments'),require('./payments'));
router.use('/users',require('../../middleware/admin/users'),require('./users'));
router.use('/users_details',require('../../middleware/admin/users_details'),require('./users_details'));
router.use('/users_documents',require('../../middleware/admin/users_documents'),require('./users_documents'));
router.use('/money_transfer',require('../../middleware/admin/money_transfer'),require('./money_transfer'));
router.use('/charge_account',require('../../middleware/admin/charge_account'),require('./charge_account'));
router.use('/financial_movement',require('../../middleware/admin/financial_movement'),require('./financial_movement'));
module.exports = router;
