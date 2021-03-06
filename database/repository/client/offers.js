var db=require('custom/helper/database');



var table='offers';
var fillable=["id","goods_id","goods_users_id","users_id","category","user_name","title","public_price","last_raise","installment_gain","installment_unit","installment_max_repeat","comments_number","extra_info"];

function select(values,callback){


    var conditions={

    "id": ["and","="],"goods_id": ["and","like"],"goods_users_id": ["and","like"],"users_id": ["and","like"],"category": ["and","like"],"user_name": ["and","like"],"title": ["and","like"],"public_price": ["and","like"],"last_raise": ["and","like"],"installment_gain": ["and","like"],"installment_unit": ["and","like"],"installment_max_repeat": ["and","like"],"comments_number": ["and","like"],"extra_info": ["and","like"]    };


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



    function goods(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'goods',
            relationTable:'offers',
            forignKey: 'goods_id',
            conditionTable: 'offers',
            conditionField: 'id'
        }


                var conditions={
        "goods.id": ["and","like"],"goods.category": ["and","like"],"goods.users_id": ["and","like"],"goods.user_name": ["and","like"],"goods.title": ["and","like"],"goods.img": ["and","like"],"goods.description": ["and","like"],"goods.public_price": ["and","like"],"goods.last_raise": ["and","like"],"goods.installment_gain": ["and","like"],"goods.installment_unit": ["and","like"],"goods.installment_max_repeat": ["and","like"],"goods.img_number": ["and","like"],"goods.comments_number": ["and","like"],"goods.earnest": ["and","like"],"goods.available_quantity": ["and","like"],"offers.id": ["and","like"],"offers.goods_id": ["and","like"],"offers.goods_users_id": ["and","like"],"offers.users_id": ["and","like"],"offers.category": ["and","like"],"offers.user_name": ["and","like"],"offers.title": ["and","like"],"offers.public_price": ["and","like"],"offers.last_raise": ["and","like"],"offers.installment_gain": ["and","like"],"offers.installment_unit": ["and","like"],"offers.installment_max_repeat": ["and","like"],"offers.comments_number": ["and","like"],"offers.extra_info": ["and","like"]
        };

        var selectedFields=[
        "goods.id as goods_id","goods.category as goods_category","goods.users_id as goods_users_id","goods.user_name as goods_user_name","goods.title as goods_title","goods.img as goods_img","goods.description as goods_description","goods.public_price as goods_public_price","goods.last_raise as goods_last_raise","goods.installment_gain as goods_installment_gain","goods.installment_unit as goods_installment_unit","goods.installment_max_repeat as goods_installment_max_repeat","goods.img_number as goods_img_number","goods.comments_number as goods_comments_number","goods.earnest as goods_earnest","goods.available_quantity as goods_available_quantity","offers.id as offers_id","offers.goods_id as offers_goods_id","offers.goods_users_id as offers_goods_users_id","offers.users_id as offers_users_id","offers.category as offers_category","offers.user_name as offers_user_name","offers.title as offers_title","offers.public_price as offers_public_price","offers.last_raise as offers_last_raise","offers.installment_gain as offers_installment_gain","offers.installment_unit as offers_installment_unit","offers.installment_max_repeat as offers_installment_max_repeat","offers.comments_number as offers_comments_number","offers.extra_info as offers_extra_info"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.goods=goods;
    function users(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'offers',
            forignKey: 'users_id',
            conditionTable: 'offers',
            conditionField: 'id'
        }


                var conditions={
        "users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"],"offers.id": ["and","like"],"offers.goods_id": ["and","like"],"offers.goods_users_id": ["and","like"],"offers.users_id": ["and","like"],"offers.category": ["and","like"],"offers.user_name": ["and","like"],"offers.title": ["and","like"],"offers.public_price": ["and","like"],"offers.last_raise": ["and","like"],"offers.installment_gain": ["and","like"],"offers.installment_unit": ["and","like"],"offers.installment_max_repeat": ["and","like"],"offers.comments_number": ["and","like"],"offers.extra_info": ["and","like"]
        };

        var selectedFields=[
        "users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank","offers.id as offers_id","offers.goods_id as offers_goods_id","offers.goods_users_id as offers_goods_users_id","offers.users_id as offers_users_id","offers.category as offers_category","offers.user_name as offers_user_name","offers.title as offers_title","offers.public_price as offers_public_price","offers.last_raise as offers_last_raise","offers.installment_gain as offers_installment_gain","offers.installment_unit as offers_installment_unit","offers.installment_max_repeat as offers_installment_max_repeat","offers.comments_number as offers_comments_number","offers.extra_info as offers_extra_info"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.users=users;
    function users(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'offers',
            forignKey: 'users_id',
            conditionTable: 'offers',
            conditionField: 'id'
        }


                var conditions={
        "users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"],"offers.id": ["and","like"],"offers.goods_id": ["and","like"],"offers.goods_users_id": ["and","like"],"offers.users_id": ["and","like"],"offers.category": ["and","like"],"offers.user_name": ["and","like"],"offers.title": ["and","like"],"offers.public_price": ["and","like"],"offers.last_raise": ["and","like"],"offers.installment_gain": ["and","like"],"offers.installment_unit": ["and","like"],"offers.installment_max_repeat": ["and","like"],"offers.comments_number": ["and","like"],"offers.extra_info": ["and","like"]
        };

        var selectedFields=[
        "users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank","offers.id as offers_id","offers.goods_id as offers_goods_id","offers.goods_users_id as offers_goods_users_id","offers.users_id as offers_users_id","offers.category as offers_category","offers.user_name as offers_user_name","offers.title as offers_title","offers.public_price as offers_public_price","offers.last_raise as offers_last_raise","offers.installment_gain as offers_installment_gain","offers.installment_unit as offers_installment_unit","offers.installment_max_repeat as offers_installment_max_repeat","offers.comments_number as offers_comments_number","offers.extra_info as offers_extra_info"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.users=users;
    function purchases(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'offers',
            relationTable:'purchases',
            forignKey: 'offers_id',
            conditionTable: 'offers',
            conditionField: 'id'
        }


                var conditions={
        "purchases.id": ["and","like"],"purchases.users_id": ["and","like"],"purchases.goods_id": ["and","like"],"purchases.offers_id": ["and","like"],"purchases.public_price": ["and","like"],"purchases.last_raise": ["and","like"],"purchases.installment_gain": ["and","like"],"purchases.installment_unit": ["and","like"],"purchases.installment_max_repeat": ["and","like"],"purchases.status": ["and","like"],"purchases.earnest": ["and","like"],"purchases.payments_id": ["and","like"],"offers.id": ["and","like"],"offers.goods_id": ["and","like"],"offers.goods_users_id": ["and","like"],"offers.users_id": ["and","like"],"offers.category": ["and","like"],"offers.user_name": ["and","like"],"offers.title": ["and","like"],"offers.public_price": ["and","like"],"offers.last_raise": ["and","like"],"offers.installment_gain": ["and","like"],"offers.installment_unit": ["and","like"],"offers.installment_max_repeat": ["and","like"],"offers.comments_number": ["and","like"],"offers.extra_info": ["and","like"]
        };

        var selectedFields=[
        "purchases.id as purchases_id","purchases.users_id as purchases_users_id","purchases.goods_id as purchases_goods_id","purchases.offers_id as purchases_offers_id","purchases.public_price as purchases_public_price","purchases.last_raise as purchases_last_raise","purchases.installment_gain as purchases_installment_gain","purchases.installment_unit as purchases_installment_unit","purchases.installment_max_repeat as purchases_installment_max_repeat","purchases.status as purchases_status","purchases.earnest as purchases_earnest","purchases.payments_id as purchases_payments_id","offers.id as offers_id","offers.goods_id as offers_goods_id","offers.goods_users_id as offers_goods_users_id","offers.users_id as offers_users_id","offers.category as offers_category","offers.user_name as offers_user_name","offers.title as offers_title","offers.public_price as offers_public_price","offers.last_raise as offers_last_raise","offers.installment_gain as offers_installment_gain","offers.installment_unit as offers_installment_unit","offers.installment_max_repeat as offers_installment_max_repeat","offers.comments_number as offers_comments_number","offers.extra_info as offers_extra_info"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.purchases=purchases;

module.exports.select=select;
module.exports.deleteRow=deleteRow;
module.exports.update=update;
module.exports.insert=insert;