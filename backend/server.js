const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Resolve directory path
const _dirname = path.resolve();
const app = express();

// Configure server to bind to all network interfaces

const PORT = process.env.PORT || 10000;

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files from frontend build directory
app.use(express.static(path.join(_dirname, "/frontend/dist")));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});


// Increase server timeout settings
app.server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


   // 120 seconds

// Catch-all route for frontend

// Optional: Add error handling
