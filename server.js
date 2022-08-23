const express = require('express');
const app = express();
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const PORT = 3000;
const mongoose = require('mongoose');
require('dotenv').config()

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
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

app.listen(PORT, () => console.log('server running'));
