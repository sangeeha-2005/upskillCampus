const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 5000;

// Allow cross-origin requests
app.use(cors());

// Parse JSON data
app.use(bodyParser.json());

// Serve static files from public folder
app.use(express.static('public'));

// API routes
app.use('/api', apiRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
