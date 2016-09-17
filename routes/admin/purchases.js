var express = require('express');
var router = express.Router();
var purchases=require('../../database/repository/admin/purchases');
var goods=require('../../database/repository/admin/goods');

router.get('/', function(req, res, next) {

    purchases.select(req.query ,function(result){
        respond(req,res,'admin/purchases/index', { results: result,search:req.query });
    });
});


router.get('/users',function(req,res,next){

    purchases.users(req.query,function(results){
        respond(req,res,'admin/purchases/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    purchases.users({'purchases.id':id},function(results){
        respond(req,res,'admin/purchases/users', { results: results ,search:req.query});

    });

});
    router.get('/goods',function(req,res,next){

    purchases.goods(req.query,function(results){
        respond(req,res,'admin/purchases/goods', { results: results ,search:req.query});
    });

});

router.get('/:id/goods',function(req,res,next){

    var id=req.params.id;
    purchases.goods({'purchases.id':id},function(results){
        respond(req,res,'admin/purchases/goods', { results: results ,search:req.query});

    });

});
    router.get('/offers',function(req,res,next){

    purchases.offers(req.query,function(results){
        respond(req,res,'admin/purchases/offers', { results: results ,search:req.query});
    });

});

router.get('/:id/offers',function(req,res,next){

    var id=req.params.id;
    purchases.offers({'purchases.id':id},function(results){
        respond(req,res,'admin/purchases/offers', { results: results ,search:req.query});

    });

});
    router.get('/payments',function(req,res,next){

    purchases.payments(req.query,function(results){
        respond(req,res,'admin/purchases/payments', { results: results ,search:req.query});
    });

});

router.get('/:id/payments',function(req,res,next){

    var id=req.params.id;
    purchases.payments({'purchases.id':id},function(results){
        respond(req,res,'admin/purchases/payments', { results: results ,search:req.query});

    });

});
    router.get('/purchases_offers',function(req,res,next){

    purchases.purchases_offers(req.query,function(results){
        respond(req,res,'admin/purchases/purchases_offers', { results: results ,search:req.query});
    });

});

router.get('/:id/purchases_offers',function(req,res,next){

    var id=req.params.id;
    purchases.purchases_offers({'purchases.id':id},function(results){
        respond(req,res,'admin/purchases/purchases_offers', { results: results ,search:req.query});

    });

});
    router.get('/payments',function(req,res,next){

    purchases.payments(req.query,function(results){
        respond(req,res,'admin/purchases/payments', { results: results ,search:req.query});
    });

});

router.get('/:id/payments',function(req,res,next){

    var id=req.params.id;
    purchases.payments({'purchases.id':id},function(results){
        respond(req,res,'admin/purchases/payments', { results: results ,search:req.query});

    });

});
    
router.get('/create', function(req, res, next) {



    req.query.users_id=req.session.user.id;

    req.query.goods_id=req.query.goods_id;
    req.query.type=req.query.type;
    req.query.offers_id=0;
    req.query.status=0;
    req.query.paymnets_id=0;

    req.query.date=Date.now();//TODO does not work

    goods.select({id:req.query.goods_id},function(result){

        req.query.public_price=result.rows[0].public_price;
        req.query.last_raise=result.rows[0].last_raise;
        req.query.installment_gain=result.rows[0].installment_gain;
        req.query.installment_unit=result.rows[0].installment_unit;
        req.query.installment_max_repeat=result.rows[0].installment_max_repeat;
        req.query.earnest=result.rows[0].earnest;
        respond(req,res,'admin/purchases/create', { values:req.query });

    });



});

router.post('/create', function(req, res, next) {

    purchases.insert(req.body,function(result){
        if(result.status ==1){
            redirectRespond(req, res,'/admin/purchases/'+result.insertId+'/edit',result);
        }else{
            respond(req,res,'admin/purchases/create', { values:req.body });
        }
    });

});

router.get('/:id', function(req, res, next) {

    var id=req.params.id
    purchases.select({id:id},function(result){
        respond(req,res,'admin/purchases/show', { results: result });
    });

});


router.get('/:id/edit', function(req, res, next) {

    var id=req.params.id
    purchases.select({id:id},function (result){
        respond(req,res,'admin/purchases/edit', { values:result.rows[0] });
    });

});

router.post('/:id/edit', function(req, res, next) {

    var id=req.params.id
    purchases.update({id:['and','=',id]},req.body,function(result){
        respond(req,res,'admin/purchases/edit', { values:req.body,result:result });
    });

});

router.get('/:id/delete', function(req, res, next) {

    var id=req.params.id;
    purchases.deleteRow(id,function(result){
        redirectRespond(req, res,'/admin/purchases/',result);
    });

});

module.exports = router;