var db=require('custom/helper/database');



var table='financial_movement';
var fillable=["id","users_id","in_amount","out_amount","current_balance","type","operation_id"];

function select(values,callback){


    var conditions={

    "id": ["and","="],"users_id": ["and","like"],"in_amount": ["and","like"],"out_amount": ["and","like"],"current_balance": ["and","like"],"type": ["and","like"],"operation_id": ["and","like"]    };


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
            relationTable:'financial_movement',
            forignKey: 'users_id',
            conditionTable: 'financial_movement',
            conditionField: 'id'
        }


                var conditions={
        "users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"],"financial_movement.id": ["and","like"],"financial_movement.users_id": ["and","like"],"financial_movement.in_amount": ["and","like"],"financial_movement.out_amount": ["and","like"],"financial_movement.current_balance": ["and","like"],"financial_movement.type": ["and","like"],"financial_movement.operation_id": ["and","like"]
        };

        var selectedFields=[
        "users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank","financial_movement.id as financial_movement_id","financial_movement.users_id as financial_movement_users_id","financial_movement.in_amount as financial_movement_in_amount","financial_movement.out_amount as financial_movement_out_amount","financial_movement.current_balance as financial_movement_current_balance","financial_movement.type as financial_movement_type","financial_movement.operation_id as financial_movement_operation_id"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.users=users;

module.exports.select=select;
module.exports.deleteRow=deleteRow;
module.exports.update=update;
module.exports.insert=insert;