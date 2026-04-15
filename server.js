const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(__dirname));

// Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Run server
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});