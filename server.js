require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Import Routes
const authRoutes = require('./routes/auth');
const accountRoutes = require('./routes/account');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB (Local for now, Atlas for Render later)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB Atlas'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Route Middleware
app.use('/api/auth', authRoutes);
app.use('/api/account', accountRoutes);

// Base Route for Health Check
app.get('/', (req, res) => {
    res.send('Banking API is running...');
});

// Dynamic Port for Deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));