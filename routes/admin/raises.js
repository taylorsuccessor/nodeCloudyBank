var express = require('express');
var router = express.Router();
var raises=require('../../database/repository/admin/raises');

router.get('/', function(req, res, next) {

    raises.select(req.query ,function(result){
        respond(req,res,'admin/raises/index', { results: result,search:req.query });
    });
});


router.get('/goods',function(req,res,next){

    raises.goods(req.query,function(results){
        respond(req,res,'admin/raises/goods', { results: results ,search:req.query});
    });

});

router.get('/:id/goods',function(req,res,next){

    var id=req.params.id;
    raises.goods({'raises.id':id},function(results){
        respond(req,res,'admin/raises/goods', { results: results ,search:req.query});

    });

});
    router.get('/users',function(req,res,next){

    raises.users(req.query,function(results){
        respond(req,res,'admin/raises/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    raises.users({'raises.id':id},function(results){
        respond(req,res,'admin/raises/users', { results: results ,search:req.query});

    });

});
    
router.get('/create', function(req, res, next) {

    respond(req,res,'admin/raises/create', { values:req.query });

});

router.post('/create', function(req, res, next) {

    raises.insert(req.body,function(result){
        if(result.status ==1){
            redirectRespond(req, res,'/admin/raises/'+result.insertId+'/edit',result);
        }else{
            respond(req,res,'admin/raises/create', { values:req.body });
        }
    });

});

router.get('/:id', function(req, res, next) {

    var id=req.params.id
    raises.select({id:id},function(result){
        respond(req,res,'admin/raises/show', { results: result });
    });

});


router.get('/:id/edit', function(req, res, next) {

    var id=req.params.id
    raises.select({id:id},function (result){
        respond(req,res,'admin/raises/edit', { values:result.rows[0] });
    });

});

router.post('/:id/edit', function(req, res, next) {

    var id=req.params.id
    raises.update({id:['and','=',id]},req.body,function(result){
        respond(req,res,'admin/raises/edit', { values:req.body,result:result });
    });

});

router.get('/:id/delete', function(req, res, next) {

    var id=req.params.id;
    raises.deleteRow(id,function(result){
        redirectRespond(req, res,'/admin/raises/',result);
    });

});

module.exports = router;