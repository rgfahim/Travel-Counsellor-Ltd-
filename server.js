const express = require('express');
const path = require('path');
const apiRoutes = require('./database/api-routes');
const searchRoutes = require('./backend/search-routes');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes with explicit JSON response
app.use('/api', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use('/api', apiRoutes);
app.use('/api', searchRoutes);

// Static files AFTER API routes
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all handler for React routes (MUST be last)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log('Database system initialized');
  console.log('External search aggregation enabled');
});