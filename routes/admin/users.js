var express = require('express');
var router = express.Router();
var users=require('../../database/repository/admin/users');

router.get('/', function(req, res, next) {

    users.select(req.query ,function(result){
        respond(req,res,'admin/users/index', { results: result,search:req.query });
    });
});


router.get('/goods',function(req,res,next){

    users.goods(req.query,function(results){
        respond(req,res,'admin/users/goods', { results: results ,search:req.query});
    });

});

router.get('/:id/goods',function(req,res,next){

    var id=req.params.id;
    users.goods({'users.id':id},function(results){
        respond(req,res,'admin/users/goods', { results: results ,search:req.query});

    });

});
    router.get('/offers',function(req,res,next){

    users.offers(req.query,function(results){
        respond(req,res,'admin/users/offers', { results: results ,search:req.query});
    });

});

router.get('/:id/offers',function(req,res,next){

    var id=req.params.id;
    users.offers({'users.id':id},function(results){
        respond(req,res,'admin/users/offers', { results: results ,search:req.query});

    });

});
    router.get('/offers',function(req,res,next){

    users.offers(req.query,function(results){
        respond(req,res,'admin/users/offers', { results: results ,search:req.query});
    });

});

router.get('/:id/offers',function(req,res,next){

    var id=req.params.id;
    users.offers({'users.id':id},function(results){
        respond(req,res,'admin/users/offers', { results: results ,search:req.query});

    });

});
    router.get('/offers_comments',function(req,res,next){

    users.offers_comments(req.query,function(results){
        respond(req,res,'admin/users/offers_comments', { results: results ,search:req.query});
    });

});

router.get('/:id/offers_comments',function(req,res,next){

    var id=req.params.id;
    users.offers_comments({'users.id':id},function(results){
        respond(req,res,'admin/users/offers_comments', { results: results ,search:req.query});

    });

});
    router.get('/comments',function(req,res,next){

    users.comments(req.query,function(results){
        respond(req,res,'admin/users/comments', { results: results ,search:req.query});
    });

});

router.get('/:id/comments',function(req,res,next){

    var id=req.params.id;
    users.comments({'users.id':id},function(results){
        respond(req,res,'admin/users/comments', { results: results ,search:req.query});

    });

});
    router.get('/raises',function(req,res,next){

    users.raises(req.query,function(results){
        respond(req,res,'admin/users/raises', { results: results ,search:req.query});
    });

});

router.get('/:id/raises',function(req,res,next){

    var id=req.params.id;
    users.raises({'users.id':id},function(results){
        respond(req,res,'admin/users/raises', { results: results ,search:req.query});

    });

});
    router.get('/purchases',function(req,res,next){

    users.purchases(req.query,function(results){
        respond(req,res,'admin/users/purchases', { results: results ,search:req.query});
    });

});

router.get('/:id/purchases',function(req,res,next){

    var id=req.params.id;
    users.purchases({'users.id':id},function(results){
        respond(req,res,'admin/users/purchases', { results: results ,search:req.query});

    });

});
    router.get('/purchases_offers',function(req,res,next){

    users.purchases_offers(req.query,function(results){
        respond(req,res,'admin/users/purchases_offers', { results: results ,search:req.query});
    });

});

router.get('/:id/purchases_offers',function(req,res,next){

    var id=req.params.id;
    users.purchases_offers({'users.id':id},function(results){
        respond(req,res,'admin/users/purchases_offers', { results: results ,search:req.query});

    });

});
    router.get('/payments',function(req,res,next){

    users.payments(req.query,function(results){
        respond(req,res,'admin/users/payments', { results: results ,search:req.query});
    });

});

router.get('/:id/payments',function(req,res,next){

    var id=req.params.id;
    users.payments({'users.id':id},function(results){
        respond(req,res,'admin/users/payments', { results: results ,search:req.query});

    });

});
    router.get('/payments',function(req,res,next){

    users.payments(req.query,function(results){
        respond(req,res,'admin/users/payments', { results: results ,search:req.query});
    });

});

router.get('/:id/payments',function(req,res,next){

    var id=req.params.id;
    users.payments({'users.id':id},function(results){
        respond(req,res,'admin/users/payments', { results: results ,search:req.query});

    });

});
    router.get('/users_details',function(req,res,next){

    users.users_details(req.query,function(results){
        respond(req,res,'admin/users/users_details', { results: results ,search:req.query});
    });

});

router.get('/:id/users_details',function(req,res,next){

    var id=req.params.id;
    users.users_details({'users.id':id},function(results){
        respond(req,res,'admin/users/users_details', { results: results ,search:req.query});

    });

});
    router.get('/users_documents',function(req,res,next){

    users.users_documents(req.query,function(results){
        respond(req,res,'admin/users/users_documents', { results: results ,search:req.query});
    });

});

router.get('/:id/users_documents',function(req,res,next){

    var id=req.params.id;
    users.users_documents({'users.id':id},function(results){
        respond(req,res,'admin/users/users_documents', { results: results ,search:req.query});

    });

});
    router.get('/money_transfer',function(req,res,next){

    users.money_transfer(req.query,function(results){
        respond(req,res,'admin/users/money_transfer', { results: results ,search:req.query});
    });

});

router.get('/:id/money_transfer',function(req,res,next){

    var id=req.params.id;
    users.money_transfer({'users.id':id},function(results){
        respond(req,res,'admin/users/money_transfer', { results: results ,search:req.query});

    });

});
    router.get('/money_transfer',function(req,res,next){

    users.money_transfer(req.query,function(results){
        respond(req,res,'admin/users/money_transfer', { results: results ,search:req.query});
    });

});

router.get('/:id/money_transfer',function(req,res,next){

    var id=req.params.id;
    users.money_transfer({'users.id':id},function(results){
        respond(req,res,'admin/users/money_transfer', { results: results ,search:req.query});

    });

});
    router.get('/charge_account',function(req,res,next){

    users.charge_account(req.query,function(results){
        respond(req,res,'admin/users/charge_account', { results: results ,search:req.query});
    });

});

router.get('/:id/charge_account',function(req,res,next){

    var id=req.params.id;
    users.charge_account({'users.id':id},function(results){
        respond(req,res,'admin/users/charge_account', { results: results ,search:req.query});

    });

});
    router.get('/financial_movement',function(req,res,next){

    users.financial_movement(req.query,function(results){
        respond(req,res,'admin/users/financial_movement', { results: results ,search:req.query});
    });

});

router.get('/:id/financial_movement',function(req,res,next){

    var id=req.params.id;
    users.financial_movement({'users.id':id},function(results){
        respond(req,res,'admin/users/financial_movement', { results: results ,search:req.query});

    });

});
    
router.get('/create', function(req, res, next) {

    respond(req,res,'admin/users/create', { values:req.query });

});

router.post('/create', function(req, res, next) {

    users.insert(req.body,function(result){
        if(result.status ==1){
            redirectRespond(req, res,'/admin/users/'+result.insertId+'/edit',result);
        }else{
            respond(req,res,'admin/users/create', { values:req.body });
        }
    });

});

router.get('/:id', function(req, res, next) {

    var id=req.params.id
    users.select({id:id},function(result){
        respond(req,res,'admin/users/show', { results: result });
    });

});


router.get('/:id/edit', function(req, res, next) {

    var id=req.params.id
    users.select({id:id},function (result){
        respond(req,res,'admin/users/edit', { values:result.rows[0] });
    });

});

router.post('/:id/edit', function(req, res, next) {

    var id=req.params.id
    users.update({id:['and','=',id]},req.body,function(result){
        respond(req,res,'admin/users/edit', { values:req.body,result:result });
    });

});

router.get('/:id/delete', function(req, res, next) {

    var id=req.params.id;
    users.deleteRow(id,function(result){
        redirectRespond(req, res,'/admin/users/',result);
    });

});

module.exports = router;