var db=require('custom/helper/database');



var table='money_transfer';
var fillable=["id","users_id","to_users_id","to_user_phone","type","amount","bank_name","account_number","account_holder","exchange_name","exchange_address","extra_details","status"];

function select(values,callback){


    var conditions={

    "id": ["and","="],"users_id": ["and","like"],"to_users_id": ["and","like"],"to_user_phone": ["and","like"],"type": ["and","like"],"amount": ["and","like"],"bank_name": ["and","like"],"account_number": ["and","like"],"account_holder": ["and","like"],"exchange_name": ["and","like"],"exchange_address": ["and","like"],"extra_details": ["and","like"],"status": ["and","like"]    };


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
            relationTable:'money_transfer',
            forignKey: 'users_id',
            conditionTable: 'money_transfer',
            conditionField: 'id'
        }


                var conditions={
        "users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"],"money_transfer.id": ["and","like"],"money_transfer.users_id": ["and","like"],"money_transfer.to_users_id": ["and","like"],"money_transfer.to_user_phone": ["and","like"],"money_transfer.type": ["and","like"],"money_transfer.amount": ["and","like"],"money_transfer.bank_name": ["and","like"],"money_transfer.account_number": ["and","like"],"money_transfer.account_holder": ["and","like"],"money_transfer.exchange_name": ["and","like"],"money_transfer.exchange_address": ["and","like"],"money_transfer.extra_details": ["and","like"],"money_transfer.status": ["and","like"]
        };

        var selectedFields=[
        "users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank","money_transfer.id as money_transfer_id","money_transfer.users_id as money_transfer_users_id","money_transfer.to_users_id as money_transfer_to_users_id","money_transfer.to_user_phone as money_transfer_to_user_phone","money_transfer.type as money_transfer_type","money_transfer.amount as money_transfer_amount","money_transfer.bank_name as money_transfer_bank_name","money_transfer.account_number as money_transfer_account_number","money_transfer.account_holder as money_transfer_account_holder","money_transfer.exchange_name as money_transfer_exchange_name","money_transfer.exchange_address as money_transfer_exchange_address","money_transfer.extra_details as money_transfer_extra_details","money_transfer.status as money_transfer_status"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.users=users;
    function users(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'money_transfer',
            forignKey: 'users_id',
            conditionTable: 'money_transfer',
            conditionField: 'id'
        }


                var conditions={
        "users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"],"money_transfer.id": ["and","like"],"money_transfer.users_id": ["and","like"],"money_transfer.to_users_id": ["and","like"],"money_transfer.to_user_phone": ["and","like"],"money_transfer.type": ["and","like"],"money_transfer.amount": ["and","like"],"money_transfer.bank_name": ["and","like"],"money_transfer.account_number": ["and","like"],"money_transfer.account_holder": ["and","like"],"money_transfer.exchange_name": ["and","like"],"money_transfer.exchange_address": ["and","like"],"money_transfer.extra_details": ["and","like"],"money_transfer.status": ["and","like"]
        };

        var selectedFields=[
        "users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank","money_transfer.id as money_transfer_id","money_transfer.users_id as money_transfer_users_id","money_transfer.to_users_id as money_transfer_to_users_id","money_transfer.to_user_phone as money_transfer_to_user_phone","money_transfer.type as money_transfer_type","money_transfer.amount as money_transfer_amount","money_transfer.bank_name as money_transfer_bank_name","money_transfer.account_number as money_transfer_account_number","money_transfer.account_holder as money_transfer_account_holder","money_transfer.exchange_name as money_transfer_exchange_name","money_transfer.exchange_address as money_transfer_exchange_address","money_transfer.extra_details as money_transfer_extra_details","money_transfer.status as money_transfer_status"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.users=users;

module.exports.select=select;
module.exports.deleteRow=deleteRow;
module.exports.update=update;
module.exports.insert=insert;