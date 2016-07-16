var express = require('express');
var router = express.Router();
var comments=require('../../database/repository/admin/comments');

router.get('/', function(req, res, next) {

    comments.select(req.query ,function(result){
        respond(req,res,'admin/comments/index', { results: result,search:req.query });
    });
});


router.get('/goods',function(req,res,next){

    comments.goods(req.query,function(results){
        respond(req,res,'admin/comments/goods', { results: results ,search:req.query});
    });

});

router.get('/:id/goods',function(req,res,next){

    var id=req.params.id;
    comments.goods({'comments.id':id},function(results){
        respond(req,res,'admin/comments/goods', { results: results ,search:req.query});

    });

});
    router.get('/users',function(req,res,next){

    comments.users(req.query,function(results){
        respond(req,res,'admin/comments/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    comments.users({'comments.id':id},function(results){
        respond(req,res,'admin/comments/users', { results: results ,search:req.query});

    });

});
    
router.get('/create', function(req, res, next) {

    respond(req,res,'admin/comments/create', { values:req.query });

});

router.post('/create', function(req, res, next) {

    comments.insert(req.body,function(result){
        if(result.status ==1){
            redirectRespond(req, res,'/admin/comments/'+result.insertId+'/edit',result);
        }else{
            respond(req,res,'admin/comments/create', { values:req.body });
        }
    });

});

router.get('/:id', function(req, res, next) {

    var id=req.params.id
    comments.select({id:id},function(result){
        respond(req,res,'admin/comments/show', { results: result });
    });

});


router.get('/:id/edit', function(req, res, next) {

    var id=req.params.id
    comments.select({id:id},function (result){
        respond(req,res,'admin/comments/edit', { values:result.rows[0] });
    });

});

router.post('/:id/edit', function(req, res, next) {

    var id=req.params.id
    comments.update({id:['and','=',id]},req.body,function(result){
        respond(req,res,'admin/comments/edit', { values:req.body,result:result });
    });

});

router.get('/:id/delete', function(req, res, next) {

    var id=req.params.id;
    comments.deleteRow(id,function(result){
        redirectRespond(req, res,'/admin/comments/',result);
    });

});

module.exports = router;