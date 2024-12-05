var mysql = require('mysql');


//create a connection
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "nodeDB",

})

//connect to MySQL
 connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected To The Database!");

	con.query("CREATE DATABASE nodeDB", function (err,result){
       if (err) throw err;
       console.log("Database Created!");

	
    })
    
   })



