const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'vehiclerental'
});

db.connect((err)=>{
    if(err){
        console.log('Database connection failed');
        process.exit();
    }

    console.log('Database connection success');
});

module.exports = db;