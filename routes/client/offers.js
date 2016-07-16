var express = require('express');
var router = express.Router();
var offers=require('../../database/repository/client/offers');

router.get('/', function(req, res, next) {

    offers.select(req.query ,function(result){
        respond(req,res,'client/offers/index', { results: result,search:req.query });
    });
});


router.get('/goods',function(req,res,next){

    offers.goods(req.query,function(results){
        respond(req,res,'client/offers/goods', { results: results ,search:req.query});
    });

});

router.get('/:id/goods',function(req,res,next){

    var id=req.params.id;
    offers.goods({'offers.id':id},function(results){
        respond(req,res,'client/offers/goods', { results: results ,search:req.query});

    });

});
    router.get('/users',function(req,res,next){

    offers.users(req.query,function(results){
        respond(req,res,'client/offers/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    offers.users({'offers.id':id},function(results){
        respond(req,res,'client/offers/users', { results: results ,search:req.query});

    });

});
    router.get('/users',function(req,res,next){

    offers.users(req.query,function(results){
        respond(req,res,'client/offers/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    offers.users({'offers.id':id},function(results){
        respond(req,res,'client/offers/users', { results: results ,search:req.query});

    });

});
    router.get('/purchases',function(req,res,next){

    offers.purchases(req.query,function(results){
        respond(req,res,'client/offers/purchases', { results: results ,search:req.query});
    });

});

router.get('/:id/purchases',function(req,res,next){

    var id=req.params.id;
    offers.purchases({'offers.id':id},function(results){
        respond(req,res,'client/offers/purchases', { results: results ,search:req.query});

    });

});
    
router.get('/create', function(req, res, next) {

    respond(req,res,'client/offers/create', { values:req.query });

});

router.post('/create', function(req, res, next) {

    offers.insert(req.body,function(result){
        if(result.status ==1){
            redirectRespond(req, res,'/client/offers/'+result.insertId+'/edit',result);
        }else{
            respond(req,res,'client/offers/create', { values:req.body });
        }
    });

});

router.get('/:id', function(req, res, next) {

    var id=req.params.id
    offers.select({id:id},function(result){
        respond(req,res,'client/offers/show', { results: result });
    });

});


router.get('/:id/edit', function(req, res, next) {

    var id=req.params.id
    offers.select({id:id},function (result){
        respond(req,res,'client/offers/edit', { values:result.rows[0] });
    });

});

router.post('/:id/edit', function(req, res, next) {

    var id=req.params.id
    offers.update({id:['and','=',id]},req.body,function(result){
        respond(req,res,'client/offers/edit', { values:req.body,result:result });
    });

});

router.get('/:id/delete', function(req, res, next) {

    var id=req.params.id;
    offers.deleteRow(id,function(result){
        redirectRespond(req, res,'/client/offers/',result);
    });

});

module.exports = router;