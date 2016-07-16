var db=require('custom/helper/database');



var table='payments';
var fillable=["id","users_id","to_users_id","amount","purchases_id","goods_id","status","extra_info"];

function select(values,callback){


    var conditions={

    "id": ["and","="],"users_id": ["and","like"],"to_users_id": ["and","like"],"amount": ["and","like"],"purchases_id": ["and","like"],"goods_id": ["and","like"],"status": ["and","like"],"extra_info": ["and","like"]    };


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
            table: 'payments',
            relationTable:'purchases',
            forignKey: 'payments_id',
            conditionTable: 'payments',
            conditionField: 'id'
        }


                var conditions={
        "purchases.id": ["and","like"],"purchases.users_id": ["and","like"],"purchases.goods_id": ["and","like"],"purchases.offers_id": ["and","like"],"purchases.public_price": ["and","like"],"purchases.last_raise": ["and","like"],"purchases.installment_gain": ["and","like"],"purchases.installment_unit": ["and","like"],"purchases.installment_max_repeat": ["and","like"],"purchases.status": ["and","like"],"purchases.earnest": ["and","like"],"purchases.payments_id": ["and","like"],"payments.id": ["and","like"],"payments.users_id": ["and","like"],"payments.to_users_id": ["and","like"],"payments.amount": ["and","like"],"payments.purchases_id": ["and","like"],"payments.goods_id": ["and","like"],"payments.status": ["and","like"],"payments.extra_info": ["and","like"]
        };

        var selectedFields=[
        "purchases.id as purchases_id","purchases.users_id as purchases_users_id","purchases.goods_id as purchases_goods_id","purchases.offers_id as purchases_offers_id","purchases.public_price as purchases_public_price","purchases.last_raise as purchases_last_raise","purchases.installment_gain as purchases_installment_gain","purchases.installment_unit as purchases_installment_unit","purchases.installment_max_repeat as purchases_installment_max_repeat","purchases.status as purchases_status","purchases.earnest as purchases_earnest","purchases.payments_id as purchases_payments_id","payments.id as payments_id","payments.users_id as payments_users_id","payments.to_users_id as payments_to_users_id","payments.amount as payments_amount","payments.purchases_id as payments_purchases_id","payments.goods_id as payments_goods_id","payments.status as payments_status","payments.extra_info as payments_extra_info"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.purchases=purchases;
    function users(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'payments',
            forignKey: 'users_id',
            conditionTable: 'payments',
            conditionField: 'id'
        }


                var conditions={
        "users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"],"payments.id": ["and","like"],"payments.users_id": ["and","like"],"payments.to_users_id": ["and","like"],"payments.amount": ["and","like"],"payments.purchases_id": ["and","like"],"payments.goods_id": ["and","like"],"payments.status": ["and","like"],"payments.extra_info": ["and","like"]
        };

        var selectedFields=[
        "users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank","payments.id as payments_id","payments.users_id as payments_users_id","payments.to_users_id as payments_to_users_id","payments.amount as payments_amount","payments.purchases_id as payments_purchases_id","payments.goods_id as payments_goods_id","payments.status as payments_status","payments.extra_info as payments_extra_info"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.users=users;
    function users(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'payments',
            forignKey: 'users_id',
            conditionTable: 'payments',
            conditionField: 'id'
        }


                var conditions={
        "users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"],"payments.id": ["and","like"],"payments.users_id": ["and","like"],"payments.to_users_id": ["and","like"],"payments.amount": ["and","like"],"payments.purchases_id": ["and","like"],"payments.goods_id": ["and","like"],"payments.status": ["and","like"],"payments.extra_info": ["and","like"]
        };

        var selectedFields=[
        "users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank","payments.id as payments_id","payments.users_id as payments_users_id","payments.to_users_id as payments_to_users_id","payments.amount as payments_amount","payments.purchases_id as payments_purchases_id","payments.goods_id as payments_goods_id","payments.status as payments_status","payments.extra_info as payments_extra_info"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.users=users;
    function purchases(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'purchases',
            relationTable:'payments',
            forignKey: 'purchases_id',
            conditionTable: 'payments',
            conditionField: 'id'
        }


                var conditions={
        "purchases.id": ["and","like"],"purchases.users_id": ["and","like"],"purchases.goods_id": ["and","like"],"purchases.offers_id": ["and","like"],"purchases.public_price": ["and","like"],"purchases.last_raise": ["and","like"],"purchases.installment_gain": ["and","like"],"purchases.installment_unit": ["and","like"],"purchases.installment_max_repeat": ["and","like"],"purchases.status": ["and","like"],"purchases.earnest": ["and","like"],"purchases.payments_id": ["and","like"],"payments.id": ["and","like"],"payments.users_id": ["and","like"],"payments.to_users_id": ["and","like"],"payments.amount": ["and","like"],"payments.purchases_id": ["and","like"],"payments.goods_id": ["and","like"],"payments.status": ["and","like"],"payments.extra_info": ["and","like"]
        };

        var selectedFields=[
        "purchases.id as purchases_id","purchases.users_id as purchases_users_id","purchases.goods_id as purchases_goods_id","purchases.offers_id as purchases_offers_id","purchases.public_price as purchases_public_price","purchases.last_raise as purchases_last_raise","purchases.installment_gain as purchases_installment_gain","purchases.installment_unit as purchases_installment_unit","purchases.installment_max_repeat as purchases_installment_max_repeat","purchases.status as purchases_status","purchases.earnest as purchases_earnest","purchases.payments_id as purchases_payments_id","payments.id as payments_id","payments.users_id as payments_users_id","payments.to_users_id as payments_to_users_id","payments.amount as payments_amount","payments.purchases_id as payments_purchases_id","payments.goods_id as payments_goods_id","payments.status as payments_status","payments.extra_info as payments_extra_info"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.purchases=purchases;
    function goods(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'goods',
            relationTable:'payments',
            forignKey: 'goods_id',
            conditionTable: 'payments',
            conditionField: 'id'
        }


                var conditions={
        "goods.id": ["and","like"],"goods.category": ["and","like"],"goods.users_id": ["and","like"],"goods.user_name": ["and","like"],"goods.title": ["and","like"],"goods.img": ["and","like"],"goods.description": ["and","like"],"goods.public_price": ["and","like"],"goods.last_raise": ["and","like"],"goods.installment_gain": ["and","like"],"goods.installment_unit": ["and","like"],"goods.installment_max_repeat": ["and","like"],"goods.img_number": ["and","like"],"goods.comments_number": ["and","like"],"goods.earnest": ["and","like"],"goods.available_quantity": ["and","like"],"payments.id": ["and","like"],"payments.users_id": ["and","like"],"payments.to_users_id": ["and","like"],"payments.amount": ["and","like"],"payments.purchases_id": ["and","like"],"payments.goods_id": ["and","like"],"payments.status": ["and","like"],"payments.extra_info": ["and","like"]
        };

        var selectedFields=[
        "goods.id as goods_id","goods.category as goods_category","goods.users_id as goods_users_id","goods.user_name as goods_user_name","goods.title as goods_title","goods.img as goods_img","goods.description as goods_description","goods.public_price as goods_public_price","goods.last_raise as goods_last_raise","goods.installment_gain as goods_installment_gain","goods.installment_unit as goods_installment_unit","goods.installment_max_repeat as goods_installment_max_repeat","goods.img_number as goods_img_number","goods.comments_number as goods_comments_number","goods.earnest as goods_earnest","goods.available_quantity as goods_available_quantity","payments.id as payments_id","payments.users_id as payments_users_id","payments.to_users_id as payments_to_users_id","payments.amount as payments_amount","payments.purchases_id as payments_purchases_id","payments.goods_id as payments_goods_id","payments.status as payments_status","payments.extra_info as payments_extra_info"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.goods=goods;

module.exports.select=select;
module.exports.deleteRow=deleteRow;
module.exports.update=update;
module.exports.insert=insert;