var express = require('express');
var router = express.Router();
var payments=require('../../database/repository/admin/payments');

router.get('/', function(req, res, next) {

    payments.select(req.query ,function(result){
        respond(req,res,'admin/payments/index', { results: result,search:req.query });
    });
});


router.get('/purchases',function(req,res,next){

    payments.purchases(req.query,function(results){
        respond(req,res,'admin/payments/purchases', { results: results ,search:req.query});
    });

});

router.get('/:id/purchases',function(req,res,next){

    var id=req.params.id;
    payments.purchases({'payments.id':id},function(results){
        respond(req,res,'admin/payments/purchases', { results: results ,search:req.query});

    });

});
    router.get('/users',function(req,res,next){

    payments.users(req.query,function(results){
        respond(req,res,'admin/payments/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    payments.users({'payments.id':id},function(results){
        respond(req,res,'admin/payments/users', { results: results ,search:req.query});

    });

});
    router.get('/users',function(req,res,next){

    payments.users(req.query,function(results){
        respond(req,res,'admin/payments/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    payments.users({'payments.id':id},function(results){
        respond(req,res,'admin/payments/users', { results: results ,search:req.query});

    });

});
    router.get('/purchases',function(req,res,next){

    payments.purchases(req.query,function(results){
        respond(req,res,'admin/payments/purchases', { results: results ,search:req.query});
    });

});

router.get('/:id/purchases',function(req,res,next){

    var id=req.params.id;
    payments.purchases({'payments.id':id},function(results){
        respond(req,res,'admin/payments/purchases', { results: results ,search:req.query});

    });

});
    router.get('/goods',function(req,res,next){

    payments.goods(req.query,function(results){
        respond(req,res,'admin/payments/goods', { results: results ,search:req.query});
    });

});

router.get('/:id/goods',function(req,res,next){

    var id=req.params.id;
    payments.goods({'payments.id':id},function(results){
        respond(req,res,'admin/payments/goods', { results: results ,search:req.query});

    });

});
    
router.get('/create', function(req, res, next) {

    respond(req,res,'admin/payments/create', { values:req.query });

});

router.post('/create', function(req, res, next) {

    payments.insert(req.body,function(result){
        if(result.status ==1){
            redirectRespond(req, res,'/admin/payments/'+result.insertId+'/edit',result);
        }else{
            respond(req,res,'admin/payments/create', { values:req.body });
        }
    });

});

router.get('/:id', function(req, res, next) {

    var id=req.params.id
    payments.select({id:id},function(result){
        respond(req,res,'admin/payments/show', { results: result });
    });

});


router.get('/:id/edit', function(req, res, next) {

    var id=req.params.id
    payments.select({id:id},function (result){
        respond(req,res,'admin/payments/edit', { values:result.rows[0] });
    });

});

router.post('/:id/edit', function(req, res, next) {

    var id=req.params.id
    payments.update({id:['and','=',id]},req.body,function(result){
        respond(req,res,'admin/payments/edit', { values:req.body,result:result });
    });

});

router.get('/:id/delete', function(req, res, next) {

    var id=req.params.id;
    payments.deleteRow(id,function(result){
        redirectRespond(req, res,'/admin/payments/',result);
    });

});

module.exports = router;