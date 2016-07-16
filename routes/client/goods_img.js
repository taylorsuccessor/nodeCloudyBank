var express = require('express');
var router = express.Router();
var goods_img=require('../../database/repository/client/goods_img');

router.get('/', function(req, res, next) {

    goods_img.select(req.query ,function(result){
        respond(req,res,'client/goods_img/index', { results: result,search:req.query });
    });
});


router.get('/goods',function(req,res,next){

    goods_img.goods(req.query,function(results){
        respond(req,res,'client/goods_img/goods', { results: results ,search:req.query});
    });

});

router.get('/:id/goods',function(req,res,next){

    var id=req.params.id;
    goods_img.goods({'goods_img.id':id},function(results){
        respond(req,res,'client/goods_img/goods', { results: results ,search:req.query});

    });

});
    
router.get('/create', function(req, res, next) {

    respond(req,res,'client/goods_img/create', { values:req.query });

});

router.post('/create', function(req, res, next) {

    goods_img.insert(req.body,function(result){
        if(result.status ==1){
            redirectRespond(req, res,'/client/goods_img/'+result.insertId+'/edit',result);
        }else{
            respond(req,res,'client/goods_img/create', { values:req.body });
        }
    });

});

router.get('/:id', function(req, res, next) {

    var id=req.params.id
    goods_img.select({id:id},function(result){
        respond(req,res,'client/goods_img/show', { results: result });
    });

});


router.get('/:id/edit', function(req, res, next) {

    var id=req.params.id
    goods_img.select({id:id},function (result){
        respond(req,res,'client/goods_img/edit', { values:result.rows[0] });
    });

});

router.post('/:id/edit', function(req, res, next) {

    var id=req.params.id
    goods_img.update({id:['and','=',id]},req.body,function(result){
        respond(req,res,'client/goods_img/edit', { values:req.body,result:result });
    });

});

router.get('/:id/delete', function(req, res, next) {

    var id=req.params.id;
    goods_img.deleteRow(id,function(result){
        redirectRespond(req, res,'/client/goods_img/',result);
    });

});

module.exports = router;