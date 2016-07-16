var express = require('express');
var router = express.Router();
var money_transfer=require('../../database/repository/client/money_transfer');

router.get('/', function(req, res, next) {

    money_transfer.select(req.query ,function(result){
        respond(req,res,'client/money_transfer/index', { results: result,search:req.query });
    });
});


router.get('/users',function(req,res,next){

    money_transfer.users(req.query,function(results){
        respond(req,res,'client/money_transfer/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    money_transfer.users({'money_transfer.id':id},function(results){
        respond(req,res,'client/money_transfer/users', { results: results ,search:req.query});

    });

});
    router.get('/users',function(req,res,next){

    money_transfer.users(req.query,function(results){
        respond(req,res,'client/money_transfer/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    money_transfer.users({'money_transfer.id':id},function(results){
        respond(req,res,'client/money_transfer/users', { results: results ,search:req.query});

    });

});
    
router.get('/create', function(req, res, next) {

    respond(req,res,'client/money_transfer/create', { values:req.query });

});

router.post('/create', function(req, res, next) {

    money_transfer.insert(req.body,function(result){
        if(result.status ==1){
            redirectRespond(req, res,'/client/money_transfer/'+result.insertId+'/edit',result);
        }else{
            respond(req,res,'client/money_transfer/create', { values:req.body });
        }
    });

});

router.get('/:id', function(req, res, next) {

    var id=req.params.id
    money_transfer.select({id:id},function(result){
        respond(req,res,'client/money_transfer/show', { results: result });
    });

});


router.get('/:id/edit', function(req, res, next) {

    var id=req.params.id
    money_transfer.select({id:id},function (result){
        respond(req,res,'client/money_transfer/edit', { values:result.rows[0] });
    });

});

router.post('/:id/edit', function(req, res, next) {

    var id=req.params.id
    money_transfer.update({id:['and','=',id]},req.body,function(result){
        respond(req,res,'client/money_transfer/edit', { values:req.body,result:result });
    });

});

router.get('/:id/delete', function(req, res, next) {

    var id=req.params.id;
    money_transfer.deleteRow(id,function(result){
        redirectRespond(req, res,'/client/money_transfer/',result);
    });

});

module.exports = router;