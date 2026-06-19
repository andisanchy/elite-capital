const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// MongoDB connection
//mongoose.connect(process.env.MONGODB_URI)
  //.then(() => console.log('MongoDB Atlas connected'))
  //.catch(err => console.log('MongoDB error:', err));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
// API to send scam wallet to frontend
app.get('/api/wallet', (req, res) => {
    res.json({ scamWallet: process.env.SCAM_WALLET });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});