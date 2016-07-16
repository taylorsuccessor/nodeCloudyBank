var db=require('custom/helper/database');



var table='offers_comments';
var fillable=["id","users_id","comment"];

function select(values,callback){


    var conditions={

    "id": ["and","="],"users_id": ["and","like"],"comment": ["and","like"]    };


   db.select(table,conditions,values,function(result){
        callback(result);
    });

}

function deleteRow(id,callback){

    db.deleteRow(table,id,function(result){
       callback(result);
    });
}
//deleteRow(5);

function update(id,data,callback){
    db.update(table,id,data,fillable,function(result){
        callback(result);
    });

}

//update(5,{name:'update dummy'},function(result){console.log(result);});

function insert(data,callback){

    db.insert(table,data,fillable,function(result){callback(result);});
}
//insert({name:'ggg',price:44,users_id:8},function(result){console.log(result)});



    function users(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'offers_comments',
            forignKey: 'users_id',
            conditionTable: 'offers_comments',
            conditionField: 'id'
        }


                var conditions={
        "users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"],"offers_comments.id": ["and","like"],"offers_comments.users_id": ["and","like"],"offers_comments.comment": ["and","like"]
        };

        var selectedFields=[
        "users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank","offers_comments.id as offers_comments_id","offers_comments.users_id as offers_comments_users_id","offers_comments.comment as offers_comments_comment"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.users=users;

module.exports.select=select;
module.exports.deleteRow=deleteRow;
module.exports.update=update;
module.exports.insert=insert;