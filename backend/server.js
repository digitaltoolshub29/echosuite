const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const userRoutes = require('./routes/userRoutes');


const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('The server is alive!');
});
app.use('/api/users', userRoutes);

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
