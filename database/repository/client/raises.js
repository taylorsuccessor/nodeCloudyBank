var db=require('custom/helper/database');



var table='raises';
var fillable=["id","goods_id","users_id","price"];

function select(values,callback){


    var conditions={

    "id": ["and","="],"goods_id": ["and","like"],"users_id": ["and","like"],"price": ["and","like"]    };


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
            relationTable:'raises',
            forignKey: 'goods_id',
            conditionTable: 'raises',
            conditionField: 'id'
        }


                var conditions={
        "goods.id": ["and","like"],"goods.category": ["and","like"],"goods.users_id": ["and","like"],"goods.user_name": ["and","like"],"goods.title": ["and","like"],"goods.img": ["and","like"],"goods.description": ["and","like"],"goods.public_price": ["and","like"],"goods.last_raise": ["and","like"],"goods.installment_gain": ["and","like"],"goods.installment_unit": ["and","like"],"goods.installment_max_repeat": ["and","like"],"goods.img_number": ["and","like"],"goods.comments_number": ["and","like"],"goods.earnest": ["and","like"],"goods.available_quantity": ["and","like"],"raises.id": ["and","like"],"raises.goods_id": ["and","like"],"raises.users_id": ["and","like"],"raises.price": ["and","like"]
        };

        var selectedFields=[
        "goods.id as goods_id","goods.category as goods_category","goods.users_id as goods_users_id","goods.user_name as goods_user_name","goods.title as goods_title","goods.img as goods_img","goods.description as goods_description","goods.public_price as goods_public_price","goods.last_raise as goods_last_raise","goods.installment_gain as goods_installment_gain","goods.installment_unit as goods_installment_unit","goods.installment_max_repeat as goods_installment_max_repeat","goods.img_number as goods_img_number","goods.comments_number as goods_comments_number","goods.earnest as goods_earnest","goods.available_quantity as goods_available_quantity","raises.id as raises_id","raises.goods_id as raises_goods_id","raises.users_id as raises_users_id","raises.price as raises_price"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.goods=goods;
    function users(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'raises',
            forignKey: 'users_id',
            conditionTable: 'raises',
            conditionField: 'id'
        }


                var conditions={
        "users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"],"raises.id": ["and","like"],"raises.goods_id": ["and","like"],"raises.users_id": ["and","like"],"raises.price": ["and","like"]
        };

        var selectedFields=[
        "users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank","raises.id as raises_id","raises.goods_id as raises_goods_id","raises.users_id as raises_users_id","raises.price as raises_price"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.users=users;

module.exports.select=select;
module.exports.deleteRow=deleteRow;
module.exports.update=update;
module.exports.insert=insert;