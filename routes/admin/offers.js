var express = require('express');
var router = express.Router();
var offers=require('../../database/repository/admin/offers');

router.get('/', function(req, res, next) {

    offers.select(req.query ,function(result){
        respond(req,res,'admin/offers/index', { results: result,search:req.query });
    });
});


router.get('/goods',function(req,res,next){

    offers.goods(req.query,function(results){
        respond(req,res,'admin/offers/goods', { results: results ,search:req.query});
    });

});

router.get('/:id/goods',function(req,res,next){

    var id=req.params.id;
    offers.goods({'offers.id':id},function(results){
        respond(req,res,'admin/offers/goods', { results: results ,search:req.query});

    });

});
    router.get('/users',function(req,res,next){

    offers.users(req.query,function(results){
        respond(req,res,'admin/offers/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    offers.users({'offers.id':id},function(results){
        respond(req,res,'admin/offers/users', { results: results ,search:req.query});

    });

});
    router.get('/users',function(req,res,next){

    offers.users(req.query,function(results){
        respond(req,res,'admin/offers/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    offers.users({'offers.id':id},function(results){
        respond(req,res,'admin/offers/users', { results: results ,search:req.query});

    });

});
    router.get('/purchases',function(req,res,next){

    offers.purchases(req.query,function(results){
        respond(req,res,'admin/offers/purchases', { results: results ,search:req.query});
    });

});

router.get('/:id/purchases',function(req,res,next){

    var id=req.params.id;
    offers.purchases({'offers.id':id},function(results){
        respond(req,res,'admin/offers/purchases', { results: results ,search:req.query});

    });

});
    
router.get('/create', function(req, res, next) {

    respond(req,res,'admin/offers/create', { values:req.query });

});

router.post('/create', function(req, res, next) {

    offers.insert(req.body,function(result){
        if(result.status ==1){
            redirectRespond(req, res,'/admin/offers/'+result.insertId+'/edit',result);
        }else{
            respond(req,res,'admin/offers/create', { values:req.body });
        }
    });

});

router.get('/:id', function(req, res, next) {

    var id=req.params.id
    offers.select({id:id},function(result){
        respond(req,res,'admin/offers/show', { results: result });
    });

});


router.get('/:id/edit', function(req, res, next) {

    var id=req.params.id
    offers.select({id:id},function (result){
        respond(req,res,'admin/offers/edit', { values:result.rows[0] });
    });

});

router.post('/:id/edit', function(req, res, next) {

    var id=req.params.id
    offers.update({id:['and','=',id]},req.body,function(result){
        respond(req,res,'admin/offers/edit', { values:req.body,result:result });
    });

});

router.get('/:id/delete', function(req, res, next) {

    var id=req.params.id;
    offers.deleteRow(id,function(result){
        redirectRespond(req, res,'/admin/offers/',result);
    });

});

module.exports = router;