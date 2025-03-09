const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const router = express.Router();
require('dotenv').config();

router.post('/register',async (req, res) => {
    const {username,password} = req.body;
    const hash = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO users(username,password) VALUES(?,?)';

    db.query(sql,[username,hash],(err,result)=>{
        if(err) return res.status(500).send(err);
        res.json({message:'User registered successfully'});
    });
});

router.post('/login',(req, res)=>{
    const {username,password} = req.body;

    const sql = 'SELECT * FROM users WHERE username = ?';

db.query(sql,[username],async (err,result)=>{
        if(result.length === 0) return res.status(400).json({message:'Invalid username or password'});
       
        const user = result[0];
        const issMatched = await bcrypt.compare(password,user.password);

        if(!issMatched) return res.status(400).json({message:'Invalid username or password'});

        const token = jwt.sign({id:user.id,username:user.username},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.json({token});
    });
});

module.exports = router;