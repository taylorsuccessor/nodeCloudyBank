var express = require('express');
var router = express.Router();
var users_documents=require('../../database/repository/admin/users_documents');

router.get('/', function(req, res, next) {

    users_documents.select(req.query ,function(result){
        respond(req,res,'admin/users_documents/index', { results: result,search:req.query });
    });
});


router.get('/users',function(req,res,next){

    users_documents.users(req.query,function(results){
        respond(req,res,'admin/users_documents/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    users_documents.users({'users_documents.id':id},function(results){
        respond(req,res,'admin/users_documents/users', { results: results ,search:req.query});

    });

});
    
router.get('/create', function(req, res, next) {

    respond(req,res,'admin/users_documents/create', { values:req.query });

});

router.post('/create', function(req, res, next) {

    users_documents.insert(req.body,function(result){
        if(result.status ==1){
            redirectRespond(req, res,'/admin/users_documents/'+result.insertId+'/edit',result);
        }else{
            respond(req,res,'admin/users_documents/create', { values:req.body });
        }
    });

});

router.get('/:id', function(req, res, next) {

    var id=req.params.id
    users_documents.select({id:id},function(result){
        respond(req,res,'admin/users_documents/show', { results: result });
    });

});


router.get('/:id/edit', function(req, res, next) {

    var id=req.params.id
    users_documents.select({id:id},function (result){
        respond(req,res,'admin/users_documents/edit', { values:result.rows[0] });
    });

});

router.post('/:id/edit', function(req, res, next) {

    var id=req.params.id
    users_documents.update({id:['and','=',id]},req.body,function(result){
        respond(req,res,'admin/users_documents/edit', { values:req.body,result:result });
    });

});

router.get('/:id/delete', function(req, res, next) {

    var id=req.params.id;
    users_documents.deleteRow(id,function(result){
        redirectRespond(req, res,'/admin/users_documents/',result);
    });

});

module.exports = router;