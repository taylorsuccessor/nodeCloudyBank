var express = require('express');
var router = express.Router();
var purchases=require('../../database/repository/client/purchases');

router.get('/', function(req, res, next) {

    purchases.select(req.query ,function(result){
        respond(req,res,'client/purchases/index', { results: result,search:req.query });
    });
});


router.get('/users',function(req,res,next){

    purchases.users(req.query,function(results){
        respond(req,res,'client/purchases/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    purchases.users({'purchases.id':id},function(results){
        respond(req,res,'client/purchases/users', { results: results ,search:req.query});

    });

});
    router.get('/goods',function(req,res,next){

    purchases.goods(req.query,function(results){
        respond(req,res,'client/purchases/goods', { results: results ,search:req.query});
    });

});

router.get('/:id/goods',function(req,res,next){

    var id=req.params.id;
    purchases.goods({'purchases.id':id},function(results){
        respond(req,res,'client/purchases/goods', { results: results ,search:req.query});

    });

});
    router.get('/offers',function(req,res,next){

    purchases.offers(req.query,function(results){
        respond(req,res,'client/purchases/offers', { results: results ,search:req.query});
    });

});

router.get('/:id/offers',function(req,res,next){

    var id=req.params.id;
    purchases.offers({'purchases.id':id},function(results){
        respond(req,res,'client/purchases/offers', { results: results ,search:req.query});

    });

});
    router.get('/payments',function(req,res,next){

    purchases.payments(req.query,function(results){
        respond(req,res,'client/purchases/payments', { results: results ,search:req.query});
    });

});

router.get('/:id/payments',function(req,res,next){

    var id=req.params.id;
    purchases.payments({'purchases.id':id},function(results){
        respond(req,res,'client/purchases/payments', { results: results ,search:req.query});

    });

});
    router.get('/purchases_offers',function(req,res,next){

    purchases.purchases_offers(req.query,function(results){
        respond(req,res,'client/purchases/purchases_offers', { results: results ,search:req.query});
    });

});

router.get('/:id/purchases_offers',function(req,res,next){

    var id=req.params.id;
    purchases.purchases_offers({'purchases.id':id},function(results){
        respond(req,res,'client/purchases/purchases_offers', { results: results ,search:req.query});

    });

});
    router.get('/payments',function(req,res,next){

    purchases.payments(req.query,function(results){
        respond(req,res,'client/purchases/payments', { results: results ,search:req.query});
    });

});

router.get('/:id/payments',function(req,res,next){

    var id=req.params.id;
    purchases.payments({'purchases.id':id},function(results){
        respond(req,res,'client/purchases/payments', { results: results ,search:req.query});

    });

});
    
router.get('/create', function(req, res, next) {

    respond(req,res,'client/purchases/create', { values:req.query });

});

router.post('/create', function(req, res, next) {

    purchases.insert(req.body,function(result){
        if(result.status ==1){
            redirectRespond(req, res,'/client/purchases/'+result.insertId+'/edit',result);
        }else{
            respond(req,res,'client/purchases/create', { values:req.body });
        }
    });

});

router.get('/:id', function(req, res, next) {

    var id=req.params.id
    purchases.select({id:id},function(result){
        respond(req,res,'client/purchases/show', { results: result });
    });

});


router.get('/:id/edit', function(req, res, next) {

    var id=req.params.id
    purchases.select({id:id},function (result){
        respond(req,res,'client/purchases/edit', { values:result.rows[0] });
    });

});

router.post('/:id/edit', function(req, res, next) {

    var id=req.params.id
    purchases.update({id:['and','=',id]},req.body,function(result){
        respond(req,res,'client/purchases/edit', { values:req.body,result:result });
    });

});

router.get('/:id/delete', function(req, res, next) {

    var id=req.params.id;
    purchases.deleteRow(id,function(result){
        redirectRespond(req, res,'/client/purchases/',result);
    });

});

module.exports = router;