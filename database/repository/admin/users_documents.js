var db=require('custom/helper/database');



var table='users_documents';
var fillable=["id","users_id","name","file_type","file_path","credibility","extra_details"];

function select(values,callback){


    var conditions={

    "id": ["and","="],"users_id": ["and","like"],"name": ["and","like"],"file_type": ["and","like"],"file_path": ["and","like"],"credibility": ["and","like"],"extra_details": ["and","like"]    };


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
            relationTable:'users_documents',
            forignKey: 'users_id',
            conditionTable: 'users_documents',
            conditionField: 'id'
        }


                var conditions={
        "users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"],"users_documents.id": ["and","like"],"users_documents.users_id": ["and","like"],"users_documents.name": ["and","like"],"users_documents.file_type": ["and","like"],"users_documents.file_path": ["and","like"],"users_documents.credibility": ["and","like"],"users_documents.extra_details": ["and","like"]
        };

        var selectedFields=[
        "users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank","users_documents.id as users_documents_id","users_documents.users_id as users_documents_users_id","users_documents.name as users_documents_name","users_documents.file_type as users_documents_file_type","users_documents.file_path as users_documents_file_path","users_documents.credibility as users_documents_credibility","users_documents.extra_details as users_documents_extra_details"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.users=users;

module.exports.select=select;
module.exports.deleteRow=deleteRow;
module.exports.update=update;
module.exports.insert=insert;