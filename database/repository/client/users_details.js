var db=require('custom/helper/database');



var table='users_details';
var fillable=["id","users_id","home_address","job","job_address","other_phones","coordinates","national_number","sallary","bank_name","bank_account","security_number","extra_details"];

function select(values,callback){


    var conditions={

    "id": ["and","="],"users_id": ["and","like"],"home_address": ["and","like"],"job": ["and","like"],"job_address": ["and","like"],"other_phones": ["and","like"],"coordinates": ["and","like"],"national_number": ["and","like"],"sallary": ["and","like"],"bank_name": ["and","like"],"bank_account": ["and","like"],"security_number": ["and","like"],"extra_details": ["and","like"]    };


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
            relationTable:'users_details',
            forignKey: 'users_id',
            conditionTable: 'users_details',
            conditionField: 'id'
        }


                var conditions={
        "users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"],"users_details.id": ["and","like"],"users_details.users_id": ["and","like"],"users_details.home_address": ["and","like"],"users_details.job": ["and","like"],"users_details.job_address": ["and","like"],"users_details.other_phones": ["and","like"],"users_details.coordinates": ["and","like"],"users_details.national_number": ["and","like"],"users_details.sallary": ["and","like"],"users_details.bank_name": ["and","like"],"users_details.bank_account": ["and","like"],"users_details.security_number": ["and","like"],"users_details.extra_details": ["and","like"]
        };

        var selectedFields=[
        "users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank","users_details.id as users_details_id","users_details.users_id as users_details_users_id","users_details.home_address as users_details_home_address","users_details.job as users_details_job","users_details.job_address as users_details_job_address","users_details.other_phones as users_details_other_phones","users_details.coordinates as users_details_coordinates","users_details.national_number as users_details_national_number","users_details.sallary as users_details_sallary","users_details.bank_name as users_details_bank_name","users_details.bank_account as users_details_bank_account","users_details.security_number as users_details_security_number","users_details.extra_details as users_details_extra_details"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.users=users;

module.exports.select=select;
module.exports.deleteRow=deleteRow;
module.exports.update=update;
module.exports.insert=insert;