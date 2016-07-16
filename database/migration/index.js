var connection= require('custom/dbConnect');

var command=require('custom/getArguments')('command');


requireFolder(__dirname + '/',function(file){
    excuteCommand(command,file);
});







function requireFolder(folder,callback){

    require('fs').readdirSync(folder).forEach(function(file) {
        if (file.match(/\.js$/) !== null && file !== 'index.js') {
            var name = file.replace('.js', '');
            var table = require(folder + file);
            callback(table);

        }
    });

}

function excuteCommand(command,table){
    switch (command){
        case ('create'):
            executeQuery(table.createTable);
            break;
        case ('drop'):
            executeQuery(table.dropTable);
            break;
        case ('seed'):
            executeQuery(table.seed);
            break;
    }
}


function executeQuery(queryText){

    if(queryText == undefined || queryText == null || queryText == '') return false;

    connection.query(' SET FOREIGN_KEY_CHECKS = 0;',function(errorForeign,resultForeign) {

        var query = connection.query(queryText, function (error, result) {


            if (error == null) {
                console.log(result.insertId);
            } else {
                console.log(error)
            }
            connection.query(' SET FOREIGN_KEY_CHECKS = 1;',function(errorForeign,resultForeign) {});


            });
    });

}