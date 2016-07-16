var express = require('express');
var router = express.Router();
var goods=require('../../database/repository/client/goods');

router.get('/', function(req, res, next) {

    goods.select(req.query ,function(result){
        respond(req,res,'client/goods/index', { results: result,search:req.query });
    });
});


router.get('/users',function(req,res,next){

    goods.users(req.query,function(results){
        respond(req,res,'client/goods/users', { results: results ,search:req.query});
    });

});

router.get('/:id/users',function(req,res,next){

    var id=req.params.id;
    goods.users({'goods.id':id},function(results){
        respond(req,res,'client/goods/users', { results: results ,search:req.query});

    });

});
    router.get('/offers',function(req,res,next){

    goods.offers(req.query,function(results){
        respond(req,res,'client/goods/offers', { results: results ,search:req.query});
    });

});

router.get('/:id/offers',function(req,res,next){

    var id=req.params.id;
    goods.offers({'goods.id':id},function(results){
        respond(req,res,'client/goods/offers', { results: results ,search:req.query});

    });

});
    router.get('/goods_img',function(req,res,next){

    goods.goods_img(req.query,function(results){
        respond(req,res,'client/goods/goods_img', { results: results ,search:req.query});
    });

});

router.get('/:id/goods_img',function(req,res,next){

    var id=req.params.id;
    goods.goods_img({'goods.id':id},function(results){
        respond(req,res,'client/goods/goods_img', { results: results ,search:req.query});

    });

});
    router.get('/comments',function(req,res,next){

    goods.comments(req.query,function(results){
        respond(req,res,'client/goods/comments', { results: results ,search:req.query});
    });

});

router.get('/:id/comments',function(req,res,next){

    var id=req.params.id;
    goods.comments({'goods.id':id},function(results){
        respond(req,res,'client/goods/comments', { results: results ,search:req.query});

    });

});
    router.get('/raises',function(req,res,next){

    goods.raises(req.query,function(results){
        respond(req,res,'client/goods/raises', { results: results ,search:req.query});
    });

});

router.get('/:id/raises',function(req,res,next){

    var id=req.params.id;
    goods.raises({'goods.id':id},function(results){
        respond(req,res,'client/goods/raises', { results: results ,search:req.query});

    });

});
    router.get('/purchases',function(req,res,next){

    goods.purchases(req.query,function(results){
        respond(req,res,'client/goods/purchases', { results: results ,search:req.query});
    });

});

router.get('/:id/purchases',function(req,res,next){

    var id=req.params.id;
    goods.purchases({'goods.id':id},function(results){
        respond(req,res,'client/goods/purchases', { results: results ,search:req.query});

    });

});
    router.get('/payments',function(req,res,next){

    goods.payments(req.query,function(results){
        respond(req,res,'client/goods/payments', { results: results ,search:req.query});
    });

});

router.get('/:id/payments',function(req,res,next){

    var id=req.params.id;
    goods.payments({'goods.id':id},function(results){
        respond(req,res,'client/goods/payments', { results: results ,search:req.query});

    });

});
    
router.get('/create', function(req, res, next) {

    respond(req,res,'client/goods/create', { values:req.query });

});

router.post('/create', function(req, res, next) {

    goods.insert(req.body,function(result){
        if(result.status ==1){
            redirectRespond(req, res,'/client/goods/'+result.insertId+'/edit',result);
        }else{
            respond(req,res,'client/goods/create', { values:req.body });
        }
    });

});

router.get('/:id', function(req, res, next) {

    var id=req.params.id
    goods.select({id:id},function(result){
        respond(req,res,'client/goods/show', { results: result });
    });

});


router.get('/:id/edit', function(req, res, next) {

    var id=req.params.id
    goods.select({id:id},function (result){
        respond(req,res,'client/goods/edit', { values:result.rows[0] });
    });

});

router.post('/:id/edit', function(req, res, next) {

    var id=req.params.id
    goods.update({id:['and','=',id]},req.body,function(result){
        respond(req,res,'client/goods/edit', { values:req.body,result:result });
    });

});

router.get('/:id/delete', function(req, res, next) {

    var id=req.params.id;
    goods.deleteRow(id,function(result){
        redirectRespond(req, res,'/client/goods/',result);
    });

});

module.exports = router;