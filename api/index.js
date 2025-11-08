const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// API routes
app.get('/api/ml', async (req, res) => {
  // ... kode untuk Mobile Legends
});

app.get('/api/ff', async (req, res) => {
  // ... kode untuk Free Fire
});

// Export app sebagai serverless function
module.exports = app;
