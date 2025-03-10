const express = require('express');
const router = express.Router();
const db = require('../config/db');
const auth = require('../middleware/auth');

const storage = require('multer').diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = require('multer')({ storage: storage });

router.post('/add',auth,upload.single('image'),(req, res) => {
    const {name,price} = req.body;
    const image = req.file.filename;

    const sql = 'INSERT INTO vehicals(name,price,image) VALUES(?,?,?)';
    db.query(sql,[name,price,image],(err,result)=>{
        if(err) return res.status(500).send(err);
        res.json({message:'Vehical added successfully'});
    });
});

module.exports = router;

