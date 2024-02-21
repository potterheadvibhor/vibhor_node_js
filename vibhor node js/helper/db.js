const mysql = require('mysql');
//const dbConfig = require("./dbconfig");
const dbConfig = {
    host: "localhost",
    user: "root",
    password: "root1234",
   database:"shop",
};

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('MySQL Connected...');
  });
  
module.exports = db;