var  mysql = require('mysql');

var conMysql =  function(){
    
    return  mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '*********',
    database: 'DB' 
    });
}

module.exports =  function(){
    return conMysql;
   
}