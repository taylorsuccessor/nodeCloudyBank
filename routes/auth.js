var express = require('express');
var router = express.Router();
var users=require('../database/repository/admin/users');




router.get('/login', function(req, res, next) {

    respond(req,res,'admin/users/login', { values:req.query });

});


function saveUserToSession(req,selectResult){

    var user=selectResult.rows[0];

    req.session.user=user;
    req.session.type="admin";


    if(user.name != "" && user.name.length > 0){
        req.session.displayName=user.name;
    }else if(user.phone != "" && user.phone.length > 0){
        req.session.displayName=user.phone;
    }else if(user.email != "" && user.email.length > 0){
        req.session.displayName=user.email;
    }else{
        req.session.displayName="visitor";
    }




}

router.post('/login', function(req, res, next) {

    users.login(req.body,function(result){
        if(result.status ==1){
            saveUserToSession(req,result);
            redirectRespond(req, res,'/admin/goods',result);
        }else{
            respond(req,res,'admin/users/login', { values:req.body });
        }
    });

});
router.get('/logout', function(req, res, next) {
    req.session.destroy(function(err) {
        // cannot access session here
    })
            res.redirect('/auth/login');



});


module.exports = router;