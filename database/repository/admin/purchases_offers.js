var db=require('custom/helper/database');



var table='purchases_offers';
var fillable=["id","purchases_id","users_id","bayer_id","status","extra_info"];

function select(values,callback){


    var conditions={

    "id": ["and","="],"purchases_id": ["and","like"],"users_id": ["and","like"],"bayer_id": ["and","like"],"status": ["and","like"],"extra_info": ["and","like"]    };


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



    function purchases(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'purchases',
            relationTable:'purchases_offers',
            forignKey: 'purchases_id',
            conditionTable: 'purchases_offers',
            conditionField: 'id'
        }


                var conditions={
        "purchases.id": ["and","like"],"purchases.users_id": ["and","like"],"purchases.goods_id": ["and","like"],"purchases.offers_id": ["and","like"],"purchases.public_price": ["and","like"],"purchases.last_raise": ["and","like"],"purchases.installment_gain": ["and","like"],"purchases.installment_unit": ["and","like"],"purchases.installment_max_repeat": ["and","like"],"purchases.status": ["and","like"],"purchases.earnest": ["and","like"],"purchases.payments_id": ["and","like"],"purchases_offers.id": ["and","like"],"purchases_offers.purchases_id": ["and","like"],"purchases_offers.users_id": ["and","like"],"purchases_offers.bayer_id": ["and","like"],"purchases_offers.status": ["and","like"],"purchases_offers.extra_info": ["and","like"]
        };

        var selectedFields=[
        "purchases.id as purchases_id","purchases.users_id as purchases_users_id","purchases.goods_id as purchases_goods_id","purchases.offers_id as purchases_offers_id","purchases.public_price as purchases_public_price","purchases.last_raise as purchases_last_raise","purchases.installment_gain as purchases_installment_gain","purchases.installment_unit as purchases_installment_unit","purchases.installment_max_repeat as purchases_installment_max_repeat","purchases.status as purchases_status","purchases.earnest as purchases_earnest","purchases.payments_id as purchases_payments_id","purchases_offers.id as purchases_offers_id","purchases_offers.purchases_id as purchases_offers_purchases_id","purchases_offers.users_id as purchases_offers_users_id","purchases_offers.bayer_id as purchases_offers_bayer_id","purchases_offers.status as purchases_offers_status","purchases_offers.extra_info as purchases_offers_extra_info"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.purchases=purchases;
    function users(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'purchases_offers',
            forignKey: 'users_id',
            conditionTable: 'purchases_offers',
            conditionField: 'id'
        }


                var conditions={
        "users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"],"purchases_offers.id": ["and","like"],"purchases_offers.purchases_id": ["and","like"],"purchases_offers.users_id": ["and","like"],"purchases_offers.bayer_id": ["and","like"],"purchases_offers.status": ["and","like"],"purchases_offers.extra_info": ["and","like"]
        };

        var selectedFields=[
        "users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank","purchases_offers.id as purchases_offers_id","purchases_offers.purchases_id as purchases_offers_purchases_id","purchases_offers.users_id as purchases_offers_users_id","purchases_offers.bayer_id as purchases_offers_bayer_id","purchases_offers.status as purchases_offers_status","purchases_offers.extra_info as purchases_offers_extra_info"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.users=users;

module.exports.select=select;
module.exports.deleteRow=deleteRow;
module.exports.update=update;
module.exports.insert=insert;