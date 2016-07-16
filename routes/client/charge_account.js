var express = require('express');
var router = express.Router();
var charge_account=require('../../database/repository/client/charge_account');

router.get('/', function(req, res, next) {

    charge_account.select(req.query ,function(result){
        respond(req,res,'client/charge_account/index', { results: result,search:req.query });
    });
});


router.get('/users',function(req,res,next){

    charge_account.users(req.query,function(results){
        respond(req,res,'client/charge_account/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    charge_account.users({'charge_account.id':id},function(results){
        respond(req,res,'client/charge_account/users', { results: results ,search:req.query});

    });

});
    
router.get('/create', function(req, res, next) {

    respond(req,res,'client/charge_account/create', { values:req.query });

});

router.post('/create', function(req, res, next) {

    charge_account.insert(req.body,function(result){
        if(result.status ==1){
            redirectRespond(req, res,'/client/charge_account/'+result.insertId+'/edit',result);
        }else{
            respond(req,res,'client/charge_account/create', { values:req.body });
        }
    });

});

router.get('/:id', function(req, res, next) {

    var id=req.params.id
    charge_account.select({id:id},function(result){
        respond(req,res,'client/charge_account/show', { results: result });
    });

});


router.get('/:id/edit', function(req, res, next) {

    var id=req.params.id
    charge_account.select({id:id},function (result){
        respond(req,res,'client/charge_account/edit', { values:result.rows[0] });
    });

});

router.post('/:id/edit', function(req, res, next) {

    var id=req.params.id
    charge_account.update({id:['and','=',id]},req.body,function(result){
        respond(req,res,'client/charge_account/edit', { values:req.body,result:result });
    });

});

router.get('/:id/delete', function(req, res, next) {

    var id=req.params.id;
    charge_account.deleteRow(id,function(result){
        redirectRespond(req, res,'/client/charge_account/',result);
    });

});

module.exports = router;