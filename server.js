const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const vehicalRouts = require('./routes/Vehicle');
const bookingRoutes = require('./routes/booking');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api',authRoutes);
app.use('/api/vehical',vehicalRouts);
app.use('/api/booking',bookingRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port 3000`);
});