require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const accountRoutes = require('./routes/account');

const app = express();

// Middleware
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected Successfully'))
    .catch((err) => console.error('❌ Database Connection Error:', err));

// Fancy Landing Page for Aditya's API
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Aditya's Banking System</title>
        <style>
            body { font-family: 'Inter', sans-serif; background: #0f172a; color: #f8fafc; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
            .card { background: #1e293b; padding: 2.5rem; border-radius: 16px; box-shadow: 0 20px 50px rgba(0,0,0,0.3); border: 1px solid #334155; max-width: 500px; text-align: center; }
            h1 { color: #38bdf8; margin-bottom: 0.5rem; letter-spacing: -1px; }
            .badge { background: #064e3b; color: #4ade80; padding: 4px 12px; border-radius: 99px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; }
            .endpoints { text-align: left; background: #0f172a; padding: 1rem; border-radius: 8px; margin: 1.5rem 0; font-family: 'Fira Code', monospace; font-size: 0.9rem; }
            .method { color: #fbbf24; font-weight: bold; }
            .path { color: #94a3b8; }
            footer { color: #64748b; font-size: 0.8rem; margin-top: 1rem; }
        </style>
    </head>
    <body>
        <div class="card">
            <span class="badge">System Live</span>
            <h1>🏦 Aditya's Banking API</h1>
            <p>JWT-Secured Backend for Experiment 2.2.2</p>
            <div class="endpoints">
                <div><span class="method">POST</span> <span class="path">/api/auth/register</span></div>
                <div><span class="method">POST</span> <span class="path">/api/auth/login</span></div>
                <div><span class="method">GET</span> <span class="path">/api/account/balance</span></div>
            </div>
            <footer>Built by Aditya Bhatia | Node.js & MongoDB</footer>
        </div>
    </body>
    </html>
    `);
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/account', accountRoutes);

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});