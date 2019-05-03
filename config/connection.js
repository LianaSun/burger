//Connect to MySQL

var mysql = require("mysql");
var connection;

if (process.env.burgerdb_url) {
    connection = mysql.createConnections(process.env.burgerdb_url)
} 

else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "burger_db"
    });
};