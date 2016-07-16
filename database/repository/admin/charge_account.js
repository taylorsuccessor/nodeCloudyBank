var db=require('custom/helper/database');



var table='charge_account';
var fillable=["id","users_id","type","amount","transfer_number","charger_name","exchange_address","extra_details","status"];

function select(values,callback){


    var conditions={

    "id": ["and","="],"users_id": ["and","like"],"type": ["and","like"],"amount": ["and","like"],"transfer_number": ["and","like"],"charger_name": ["and","like"],"exchange_address": ["and","like"],"extra_details": ["and","like"],"status": ["and","like"]    };


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
            relationTable:'charge_account',
            forignKey: 'users_id',
            conditionTable: 'charge_account',
            conditionField: 'id'
        }


                var conditions={
        "users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"],"charge_account.id": ["and","like"],"charge_account.users_id": ["and","like"],"charge_account.type": ["and","like"],"charge_account.amount": ["and","like"],"charge_account.transfer_number": ["and","like"],"charge_account.charger_name": ["and","like"],"charge_account.exchange_address": ["and","like"],"charge_account.extra_details": ["and","like"],"charge_account.status": ["and","like"]
        };

        var selectedFields=[
        "users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank","charge_account.id as charge_account_id","charge_account.users_id as charge_account_users_id","charge_account.type as charge_account_type","charge_account.amount as charge_account_amount","charge_account.transfer_number as charge_account_transfer_number","charge_account.charger_name as charge_account_charger_name","charge_account.exchange_address as charge_account_exchange_address","charge_account.extra_details as charge_account_extra_details","charge_account.status as charge_account_status"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.users=users;

module.exports.select=select;
module.exports.deleteRow=deleteRow;
module.exports.update=update;
module.exports.insert=insert;