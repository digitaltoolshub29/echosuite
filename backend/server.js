const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('The server is alive!');
});
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
