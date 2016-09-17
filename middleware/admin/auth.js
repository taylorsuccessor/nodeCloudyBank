module.exports=function(req,res,next){

    if(req.session.type=="admin"){
        next();

    }else{        redirectRespond(req, res,'/auth/login',{});
    }
    }