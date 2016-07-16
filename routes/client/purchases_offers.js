var express = require('express');
var router = express.Router();
var purchases_offers=require('../../database/repository/client/purchases_offers');

router.get('/', function(req, res, next) {

    purchases_offers.select(req.query ,function(result){
        respond(req,res,'client/purchases_offers/index', { results: result,search:req.query });
    });
});


router.get('/purchases',function(req,res,next){

    purchases_offers.purchases(req.query,function(results){
        respond(req,res,'client/purchases_offers/purchases', { results: results ,search:req.query});
    });

});

router.get('/:id/purchases',function(req,res,next){

    var id=req.params.id;
    purchases_offers.purchases({'purchases_offers.id':id},function(results){
        respond(req,res,'client/purchases_offers/purchases', { results: results ,search:req.query});

    });

});
    router.get('/users',function(req,res,next){

    purchases_offers.users(req.query,function(results){
        respond(req,res,'client/purchases_offers/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    purchases_offers.users({'purchases_offers.id':id},function(results){
        respond(req,res,'client/purchases_offers/users', { results: results ,search:req.query});

    });

});
    
router.get('/create', function(req, res, next) {

    respond(req,res,'client/purchases_offers/create', { values:req.query });

});

router.post('/create', function(req, res, next) {

    purchases_offers.insert(req.body,function(result){
        if(result.status ==1){
            redirectRespond(req, res,'/client/purchases_offers/'+result.insertId+'/edit',result);
        }else{
            respond(req,res,'client/purchases_offers/create', { values:req.body });
        }
    });

});

router.get('/:id', function(req, res, next) {

    var id=req.params.id
    purchases_offers.select({id:id},function(result){
        respond(req,res,'client/purchases_offers/show', { results: result });
    });

});


router.get('/:id/edit', function(req, res, next) {

    var id=req.params.id
    purchases_offers.select({id:id},function (result){
        respond(req,res,'client/purchases_offers/edit', { values:result.rows[0] });
    });

});

router.post('/:id/edit', function(req, res, next) {

    var id=req.params.id
    purchases_offers.update({id:['and','=',id]},req.body,function(result){
        respond(req,res,'client/purchases_offers/edit', { values:req.body,result:result });
    });

});

router.get('/:id/delete', function(req, res, next) {

    var id=req.params.id;
    purchases_offers.deleteRow(id,function(result){
        redirectRespond(req, res,'/client/purchases_offers/',result);
    });

});

module.exports = router;