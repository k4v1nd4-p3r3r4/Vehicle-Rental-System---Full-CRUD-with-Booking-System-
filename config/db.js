const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'vehicalrental'
});

db.connect((err)=>{
    if(err){
        console.log('Database connection failed');
        process.exit();
    }

    console.log('Database connection success');
});

module.exports = db;