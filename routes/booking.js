const express = require('express');
const router = express.Router();
const db = require('../config/db');
const auth = require('../middleware/auth');

router.post('/book',auth,(req, res) => {
    const {vehicle_id,date,days} = req.body;
    const user_id = req.user.id;

    const sql = 'INSERT INTO bookings(user_id,vehicle_id,date,days) VALUES(?,?,?,?)';
    db.query(sql,[user_id,vehicle_id,date,days],(err,result)=>{
        if(err) return res.status(500).send(err);
        res.json({message:'Booking success'});
    }
    );
});






module.exports = router;