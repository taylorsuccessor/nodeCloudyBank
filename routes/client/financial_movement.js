var express = require('express');
var router = express.Router();
var financial_movement=require('../../database/repository/client/financial_movement');

router.get('/', function(req, res, next) {

    financial_movement.select(req.query ,function(result){
        respond(req,res,'client/financial_movement/index', { results: result,search:req.query });
    });
});


router.get('/users',function(req,res,next){

    financial_movement.users(req.query,function(results){
        respond(req,res,'client/financial_movement/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    financial_movement.users({'financial_movement.id':id},function(results){
        respond(req,res,'client/financial_movement/users', { results: results ,search:req.query});

    });

});
    
router.get('/create', function(req, res, next) {

    respond(req,res,'client/financial_movement/create', { values:req.query });

});

router.post('/create', function(req, res, next) {

    financial_movement.insert(req.body,function(result){
        if(result.status ==1){
            redirectRespond(req, res,'/client/financial_movement/'+result.insertId+'/edit',result);
        }else{
            respond(req,res,'client/financial_movement/create', { values:req.body });
        }
    });

});

router.get('/:id', function(req, res, next) {

    var id=req.params.id
    financial_movement.select({id:id},function(result){
        respond(req,res,'client/financial_movement/show', { results: result });
    });

});


router.get('/:id/edit', function(req, res, next) {

    var id=req.params.id
    financial_movement.select({id:id},function (result){
        respond(req,res,'client/financial_movement/edit', { values:result.rows[0] });
    });

});

router.post('/:id/edit', function(req, res, next) {

    var id=req.params.id
    financial_movement.update({id:['and','=',id]},req.body,function(result){
        respond(req,res,'client/financial_movement/edit', { values:req.body,result:result });
    });

});

router.get('/:id/delete', function(req, res, next) {

    var id=req.params.id;
    financial_movement.deleteRow(id,function(result){
        redirectRespond(req, res,'/client/financial_movement/',result);
    });

});

module.exports = router;