var express = require('express');
var router = express.Router();
var offers_comments=require('../../database/repository/client/offers_comments');

router.get('/', function(req, res, next) {

    offers_comments.select(req.query ,function(result){
        respond(req,res,'client/offers_comments/index', { results: result,search:req.query });
    });
});


router.get('/users',function(req,res,next){

    offers_comments.users(req.query,function(results){
        respond(req,res,'client/offers_comments/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    offers_comments.users({'offers_comments.id':id},function(results){
        respond(req,res,'client/offers_comments/users', { results: results ,search:req.query});

    });

});
    
router.get('/create', function(req, res, next) {

    respond(req,res,'client/offers_comments/create', { values:req.query });

});

router.post('/create', function(req, res, next) {

    offers_comments.insert(req.body,function(result){
        if(result.status ==1){
            redirectRespond(req, res,'/client/offers_comments/'+result.insertId+'/edit',result);
        }else{
            respond(req,res,'client/offers_comments/create', { values:req.body });
        }
    });

});

router.get('/:id', function(req, res, next) {

    var id=req.params.id
    offers_comments.select({id:id},function(result){
        respond(req,res,'client/offers_comments/show', { results: result });
    });

});


router.get('/:id/edit', function(req, res, next) {

    var id=req.params.id
    offers_comments.select({id:id},function (result){
        respond(req,res,'client/offers_comments/edit', { values:result.rows[0] });
    });

});

router.post('/:id/edit', function(req, res, next) {

    var id=req.params.id
    offers_comments.update({id:['and','=',id]},req.body,function(result){
        respond(req,res,'client/offers_comments/edit', { values:req.body,result:result });
    });

});

router.get('/:id/delete', function(req, res, next) {

    var id=req.params.id;
    offers_comments.deleteRow(id,function(result){
        redirectRespond(req, res,'/client/offers_comments/',result);
    });

});

module.exports = router;