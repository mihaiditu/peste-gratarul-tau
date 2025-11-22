const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware Setup
app.use(cors()); 
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Simple root route (API check)
app.get('/', (req, res) => {
  res.send('MERN API is running...');
});

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));