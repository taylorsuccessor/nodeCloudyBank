var db=require('custom/helper/database');



var table='users';
var fillable=["id","name","email","phone","password","img","rank"];

function select(values,callback){


    var conditions={

        "id": ["and","="],"name": ["and","like"],"email": ["and","like"],"phone": ["and","like"],"password": ["and","like"],"img": ["and","like"],"rank": ["and","like"]    };


    db.select(table,conditions,values,function(result){
        callback(result);
    });

}

function login(values,callback){


    var conditions={

        "condition_group": ["and",{
            "name":["or","=",values.userName],
            "email": ["or","=",values.userName],
            "phone": ["or","=",values.userName]
        }

        ],"password":["and","=",values.password]  };


    db.select(table,conditions,values,function(result){
        if(result.status ==1){
            //save user name and phone email to session
        }
        console.log(result); callback(result);
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
            table: 'users',
            relationTable:'goods',
            forignKey: 'users_id',
            conditionTable: 'users',
            conditionField: 'id'
        }


                var conditions={
        "goods.id": ["and","like"],"goods.category": ["and","like"],"goods.users_id": ["and","like"],"goods.user_name": ["and","like"],"goods.title": ["and","like"],"goods.img": ["and","like"],"goods.description": ["and","like"],"goods.public_price": ["and","like"],"goods.last_raise": ["and","like"],"goods.installment_gain": ["and","like"],"goods.installment_unit": ["and","like"],"goods.installment_max_repeat": ["and","like"],"goods.img_number": ["and","like"],"goods.comments_number": ["and","like"],"goods.earnest": ["and","like"],"goods.available_quantity": ["and","like"],"users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"]
        };

        var selectedFields=[
        "goods.id as goods_id","goods.category as goods_category","goods.users_id as goods_users_id","goods.user_name as goods_user_name","goods.title as goods_title","goods.img as goods_img","goods.description as goods_description","goods.public_price as goods_public_price","goods.last_raise as goods_last_raise","goods.installment_gain as goods_installment_gain","goods.installment_unit as goods_installment_unit","goods.installment_max_repeat as goods_installment_max_repeat","goods.img_number as goods_img_number","goods.comments_number as goods_comments_number","goods.earnest as goods_earnest","goods.available_quantity as goods_available_quantity","users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.goods=goods;
    function offers(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'offers',
            forignKey: 'users_id',
            conditionTable: 'users',
            conditionField: 'id'
        }


                var conditions={
        "offers.id": ["and","like"],"offers.goods_id": ["and","like"],"offers.goods_users_id": ["and","like"],"offers.users_id": ["and","like"],"offers.category": ["and","like"],"offers.user_name": ["and","like"],"offers.title": ["and","like"],"offers.public_price": ["and","like"],"offers.last_raise": ["and","like"],"offers.installment_gain": ["and","like"],"offers.installment_unit": ["and","like"],"offers.installment_max_repeat": ["and","like"],"offers.comments_number": ["and","like"],"offers.extra_info": ["and","like"],"users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"]
        };

        var selectedFields=[
        "offers.id as offers_id","offers.goods_id as offers_goods_id","offers.goods_users_id as offers_goods_users_id","offers.users_id as offers_users_id","offers.category as offers_category","offers.user_name as offers_user_name","offers.title as offers_title","offers.public_price as offers_public_price","offers.last_raise as offers_last_raise","offers.installment_gain as offers_installment_gain","offers.installment_unit as offers_installment_unit","offers.installment_max_repeat as offers_installment_max_repeat","offers.comments_number as offers_comments_number","offers.extra_info as offers_extra_info","users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.offers=offers;
    function offers(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'offers',
            forignKey: 'users_id',
            conditionTable: 'users',
            conditionField: 'id'
        }


                var conditions={
        "offers.id": ["and","like"],"offers.goods_id": ["and","like"],"offers.goods_users_id": ["and","like"],"offers.users_id": ["and","like"],"offers.category": ["and","like"],"offers.user_name": ["and","like"],"offers.title": ["and","like"],"offers.public_price": ["and","like"],"offers.last_raise": ["and","like"],"offers.installment_gain": ["and","like"],"offers.installment_unit": ["and","like"],"offers.installment_max_repeat": ["and","like"],"offers.comments_number": ["and","like"],"offers.extra_info": ["and","like"],"users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"]
        };

        var selectedFields=[
        "offers.id as offers_id","offers.goods_id as offers_goods_id","offers.goods_users_id as offers_goods_users_id","offers.users_id as offers_users_id","offers.category as offers_category","offers.user_name as offers_user_name","offers.title as offers_title","offers.public_price as offers_public_price","offers.last_raise as offers_last_raise","offers.installment_gain as offers_installment_gain","offers.installment_unit as offers_installment_unit","offers.installment_max_repeat as offers_installment_max_repeat","offers.comments_number as offers_comments_number","offers.extra_info as offers_extra_info","users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.offers=offers;
    function offers_comments(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'offers_comments',
            forignKey: 'users_id',
            conditionTable: 'users',
            conditionField: 'id'
        }


                var conditions={
        "offers_comments.id": ["and","like"],"offers_comments.users_id": ["and","like"],"offers_comments.comment": ["and","like"],"users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"]
        };

        var selectedFields=[
        "offers_comments.id as offers_comments_id","offers_comments.users_id as offers_comments_users_id","offers_comments.comment as offers_comments_comment","users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.offers_comments=offers_comments;
    function comments(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'comments',
            forignKey: 'users_id',
            conditionTable: 'users',
            conditionField: 'id'
        }


                var conditions={
        "comments.id": ["and","like"],"comments.goods_id": ["and","like"],"comments.users_id": ["and","like"],"comments.comment": ["and","like"],"users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"]
        };

        var selectedFields=[
        "comments.id as comments_id","comments.goods_id as comments_goods_id","comments.users_id as comments_users_id","comments.comment as comments_comment","users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.comments=comments;
    function raises(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'raises',
            forignKey: 'users_id',
            conditionTable: 'users',
            conditionField: 'id'
        }


                var conditions={
        "raises.id": ["and","like"],"raises.goods_id": ["and","like"],"raises.users_id": ["and","like"],"raises.price": ["and","like"],"users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"]
        };

        var selectedFields=[
        "raises.id as raises_id","raises.goods_id as raises_goods_id","raises.users_id as raises_users_id","raises.price as raises_price","users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.raises=raises;
    function purchases(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'purchases',
            forignKey: 'users_id',
            conditionTable: 'users',
            conditionField: 'id'
        }


                var conditions={
        "purchases.id": ["and","like"],"purchases.users_id": ["and","like"],"purchases.goods_id": ["and","like"],"purchases.offers_id": ["and","like"],"purchases.public_price": ["and","like"],"purchases.last_raise": ["and","like"],"purchases.installment_gain": ["and","like"],"purchases.installment_unit": ["and","like"],"purchases.installment_max_repeat": ["and","like"],"purchases.status": ["and","like"],"purchases.earnest": ["and","like"],"purchases.payments_id": ["and","like"],"users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"]
        };

        var selectedFields=[
        "purchases.id as purchases_id","purchases.users_id as purchases_users_id","purchases.goods_id as purchases_goods_id","purchases.offers_id as purchases_offers_id","purchases.public_price as purchases_public_price","purchases.last_raise as purchases_last_raise","purchases.installment_gain as purchases_installment_gain","purchases.installment_unit as purchases_installment_unit","purchases.installment_max_repeat as purchases_installment_max_repeat","purchases.status as purchases_status","purchases.earnest as purchases_earnest","purchases.payments_id as purchases_payments_id","users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.purchases=purchases;
    function purchases_offers(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'purchases_offers',
            forignKey: 'users_id',
            conditionTable: 'users',
            conditionField: 'id'
        }


                var conditions={
        "purchases_offers.id": ["and","like"],"purchases_offers.purchases_id": ["and","like"],"purchases_offers.users_id": ["and","like"],"purchases_offers.bayer_id": ["and","like"],"purchases_offers.status": ["and","like"],"purchases_offers.extra_info": ["and","like"],"users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"]
        };

        var selectedFields=[
        "purchases_offers.id as purchases_offers_id","purchases_offers.purchases_id as purchases_offers_purchases_id","purchases_offers.users_id as purchases_offers_users_id","purchases_offers.bayer_id as purchases_offers_bayer_id","purchases_offers.status as purchases_offers_status","purchases_offers.extra_info as purchases_offers_extra_info","users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.purchases_offers=purchases_offers;
    function payments(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'payments',
            forignKey: 'users_id',
            conditionTable: 'users',
            conditionField: 'id'
        }


                var conditions={
        "payments.id": ["and","like"],"payments.users_id": ["and","like"],"payments.to_users_id": ["and","like"],"payments.amount": ["and","like"],"payments.purchases_id": ["and","like"],"payments.goods_id": ["and","like"],"payments.status": ["and","like"],"payments.extra_info": ["and","like"],"users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"]
        };

        var selectedFields=[
        "payments.id as payments_id","payments.users_id as payments_users_id","payments.to_users_id as payments_to_users_id","payments.amount as payments_amount","payments.purchases_id as payments_purchases_id","payments.goods_id as payments_goods_id","payments.status as payments_status","payments.extra_info as payments_extra_info","users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.payments=payments;
    function payments(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'payments',
            forignKey: 'users_id',
            conditionTable: 'users',
            conditionField: 'id'
        }


                var conditions={
        "payments.id": ["and","like"],"payments.users_id": ["and","like"],"payments.to_users_id": ["and","like"],"payments.amount": ["and","like"],"payments.purchases_id": ["and","like"],"payments.goods_id": ["and","like"],"payments.status": ["and","like"],"payments.extra_info": ["and","like"],"users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"]
        };

        var selectedFields=[
        "payments.id as payments_id","payments.users_id as payments_users_id","payments.to_users_id as payments_to_users_id","payments.amount as payments_amount","payments.purchases_id as payments_purchases_id","payments.goods_id as payments_goods_id","payments.status as payments_status","payments.extra_info as payments_extra_info","users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.payments=payments;
    function users_details(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'users_details',
            forignKey: 'users_id',
            conditionTable: 'users',
            conditionField: 'id'
        }


                var conditions={
        "users_details.id": ["and","like"],"users_details.users_id": ["and","like"],"users_details.home_address": ["and","like"],"users_details.job": ["and","like"],"users_details.job_address": ["and","like"],"users_details.other_phones": ["and","like"],"users_details.coordinates": ["and","like"],"users_details.national_number": ["and","like"],"users_details.sallary": ["and","like"],"users_details.bank_name": ["and","like"],"users_details.bank_account": ["and","like"],"users_details.security_number": ["and","like"],"users_details.extra_details": ["and","like"],"users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"]
        };

        var selectedFields=[
        "users_details.id as users_details_id","users_details.users_id as users_details_users_id","users_details.home_address as users_details_home_address","users_details.job as users_details_job","users_details.job_address as users_details_job_address","users_details.other_phones as users_details_other_phones","users_details.coordinates as users_details_coordinates","users_details.national_number as users_details_national_number","users_details.sallary as users_details_sallary","users_details.bank_name as users_details_bank_name","users_details.bank_account as users_details_bank_account","users_details.security_number as users_details_security_number","users_details.extra_details as users_details_extra_details","users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.users_details=users_details;
    function users_documents(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'users_documents',
            forignKey: 'users_id',
            conditionTable: 'users',
            conditionField: 'id'
        }


                var conditions={
        "users_documents.id": ["and","like"],"users_documents.users_id": ["and","like"],"users_documents.name": ["and","like"],"users_documents.file_type": ["and","like"],"users_documents.file_path": ["and","like"],"users_documents.credibility": ["and","like"],"users_documents.extra_details": ["and","like"],"users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"]
        };

        var selectedFields=[
        "users_documents.id as users_documents_id","users_documents.users_id as users_documents_users_id","users_documents.name as users_documents_name","users_documents.file_type as users_documents_file_type","users_documents.file_path as users_documents_file_path","users_documents.credibility as users_documents_credibility","users_documents.extra_details as users_documents_extra_details","users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.users_documents=users_documents;
    function money_transfer(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'money_transfer',
            forignKey: 'users_id',
            conditionTable: 'users',
            conditionField: 'id'
        }


                var conditions={
        "money_transfer.id": ["and","like"],"money_transfer.users_id": ["and","like"],"money_transfer.to_users_id": ["and","like"],"money_transfer.to_user_phone": ["and","like"],"money_transfer.type": ["and","like"],"money_transfer.amount": ["and","like"],"money_transfer.bank_name": ["and","like"],"money_transfer.account_number": ["and","like"],"money_transfer.account_holder": ["and","like"],"money_transfer.exchange_name": ["and","like"],"money_transfer.exchange_address": ["and","like"],"money_transfer.extra_details": ["and","like"],"money_transfer.status": ["and","like"],"users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"]
        };

        var selectedFields=[
        "money_transfer.id as money_transfer_id","money_transfer.users_id as money_transfer_users_id","money_transfer.to_users_id as money_transfer_to_users_id","money_transfer.to_user_phone as money_transfer_to_user_phone","money_transfer.type as money_transfer_type","money_transfer.amount as money_transfer_amount","money_transfer.bank_name as money_transfer_bank_name","money_transfer.account_number as money_transfer_account_number","money_transfer.account_holder as money_transfer_account_holder","money_transfer.exchange_name as money_transfer_exchange_name","money_transfer.exchange_address as money_transfer_exchange_address","money_transfer.extra_details as money_transfer_extra_details","money_transfer.status as money_transfer_status","users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.money_transfer=money_transfer;
    function money_transfer(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'money_transfer',
            forignKey: 'users_id',
            conditionTable: 'users',
            conditionField: 'id'
        }


                var conditions={
        "money_transfer.id": ["and","like"],"money_transfer.users_id": ["and","like"],"money_transfer.to_users_id": ["and","like"],"money_transfer.to_user_phone": ["and","like"],"money_transfer.type": ["and","like"],"money_transfer.amount": ["and","like"],"money_transfer.bank_name": ["and","like"],"money_transfer.account_number": ["and","like"],"money_transfer.account_holder": ["and","like"],"money_transfer.exchange_name": ["and","like"],"money_transfer.exchange_address": ["and","like"],"money_transfer.extra_details": ["and","like"],"money_transfer.status": ["and","like"],"users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"]
        };

        var selectedFields=[
        "money_transfer.id as money_transfer_id","money_transfer.users_id as money_transfer_users_id","money_transfer.to_users_id as money_transfer_to_users_id","money_transfer.to_user_phone as money_transfer_to_user_phone","money_transfer.type as money_transfer_type","money_transfer.amount as money_transfer_amount","money_transfer.bank_name as money_transfer_bank_name","money_transfer.account_number as money_transfer_account_number","money_transfer.account_holder as money_transfer_account_holder","money_transfer.exchange_name as money_transfer_exchange_name","money_transfer.exchange_address as money_transfer_exchange_address","money_transfer.extra_details as money_transfer_extra_details","money_transfer.status as money_transfer_status","users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.money_transfer=money_transfer;
    function charge_account(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'charge_account',
            forignKey: 'users_id',
            conditionTable: 'users',
            conditionField: 'id'
        }


                var conditions={
        "charge_account.id": ["and","like"],"charge_account.users_id": ["and","like"],"charge_account.type": ["and","like"],"charge_account.amount": ["and","like"],"charge_account.transfer_number": ["and","like"],"charge_account.charger_name": ["and","like"],"charge_account.exchange_address": ["and","like"],"charge_account.extra_details": ["and","like"],"charge_account.status": ["and","like"],"users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"]
        };

        var selectedFields=[
        "charge_account.id as charge_account_id","charge_account.users_id as charge_account_users_id","charge_account.type as charge_account_type","charge_account.amount as charge_account_amount","charge_account.transfer_number as charge_account_transfer_number","charge_account.charger_name as charge_account_charger_name","charge_account.exchange_address as charge_account_exchange_address","charge_account.extra_details as charge_account_extra_details","charge_account.status as charge_account_status","users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.charge_account=charge_account;
    function financial_movement(data,callback){

        var relation= {
            relation: 'one-many',
            table: 'users',
            relationTable:'financial_movement',
            forignKey: 'users_id',
            conditionTable: 'users',
            conditionField: 'id'
        }


                var conditions={
        "financial_movement.id": ["and","like"],"financial_movement.users_id": ["and","like"],"financial_movement.in_amount": ["and","like"],"financial_movement.out_amount": ["and","like"],"financial_movement.current_balance": ["and","like"],"financial_movement.type": ["and","like"],"financial_movement.operation_id": ["and","like"],"users.id": ["and","like"],"users.name": ["and","like"],"users.email": ["and","like"],"users.phone": ["and","like"],"users.password": ["and","like"],"users.img": ["and","like"],"users.rank": ["and","like"]
        };

        var selectedFields=[
        "financial_movement.id as financial_movement_id","financial_movement.users_id as financial_movement_users_id","financial_movement.in_amount as financial_movement_in_amount","financial_movement.out_amount as financial_movement_out_amount","financial_movement.current_balance as financial_movement_current_balance","financial_movement.type as financial_movement_type","financial_movement.operation_id as financial_movement_operation_id","users.id as users_id","users.name as users_name","users.email as users_email","users.phone as users_phone","users.password as users_password","users.img as users_img","users.rank as users_rank"        ];


        db.selectRelation(relation,conditions,data,selectedFields,function(result){callback(result);});

    }
    module.exports.financial_movement=financial_movement;

module.exports.select=select;
module.exports.deleteRow=deleteRow;
module.exports.update=update;
module.exports.insert=insert;
module.exports.login=login;