const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const vehicleRoutes = require('./routes/Vehicle');
const bookingRoutes = require('./routes/booking');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api', authRoutes);
app.use('/api/vehicle', vehicleRoutes);
app.use('/api/booking', bookingRoutes);

app.listen(3000, () => {
  console.log('🔥 Server Running on Port 3000');
});
