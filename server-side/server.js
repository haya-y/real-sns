const express = require('express');
const app = express();
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const uploadRoute = require('./routes/upload');
const PORT = 4000;
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

// Connect database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('connecting DB...');
  })
  .catch((err) => {
    console.log(err);
  });

// Middleware
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/upload', uploadRoute);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => console.log('server running'));
