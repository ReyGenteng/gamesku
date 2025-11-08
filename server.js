const express = require('express');
const cors = require('cors');
const gameRoutes = require('./routes/game');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', gameRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Game Username Checker API',
    endpoints: {
      mobileLegends: '/api/ml?id={id}&server={server}',
      freeFire: '/api/ff?id={id}',
      example: {
        mobileLegends: '/api/ml?id=1114917746&server=13486',
        freeFire: '/api/ff?id=123456789'
      }
    }
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Documentation: http://localhost:${PORT}`);
});