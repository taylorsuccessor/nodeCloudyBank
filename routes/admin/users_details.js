var express = require('express');
var router = express.Router();
var users_details=require('../../database/repository/admin/users_details');

router.get('/', function(req, res, next) {

    users_details.select(req.query ,function(result){
        respond(req,res,'admin/users_details/index', { results: result,search:req.query });
    });
});


router.get('/users',function(req,res,next){

    users_details.users(req.query,function(results){
        respond(req,res,'admin/users_details/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    users_details.users({'users_details.id':id},function(results){
        respond(req,res,'admin/users_details/users', { results: results ,search:req.query});

    });

});
    
router.get('/create', function(req, res, next) {

    respond(req,res,'admin/users_details/create', { values:req.query });

});

router.post('/create', function(req, res, next) {

    users_details.insert(req.body,function(result){
        if(result.status ==1){
            redirectRespond(req, res,'/admin/users_details/'+result.insertId+'/edit',result);
        }else{
            respond(req,res,'admin/users_details/create', { values:req.body });
        }
    });

});

router.get('/:id', function(req, res, next) {

    var id=req.params.id
    users_details.select({id:id},function(result){
        respond(req,res,'admin/users_details/show', { results: result });
    });

});


router.get('/:id/edit', function(req, res, next) {

    var id=req.params.id
    users_details.select({id:id},function (result){
        respond(req,res,'admin/users_details/edit', { values:result.rows[0] });
    });

});

router.post('/:id/edit', function(req, res, next) {

    var id=req.params.id
    users_details.update({id:['and','=',id]},req.body,function(result){
        respond(req,res,'admin/users_details/edit', { values:req.body,result:result });
    });

});

router.get('/:id/delete', function(req, res, next) {

    var id=req.params.id;
    users_details.deleteRow(id,function(result){
        redirectRespond(req, res,'/admin/users_details/',result);
    });

});

module.exports = router;