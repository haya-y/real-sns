import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';

import userRoute from './routes/users';
import authRoutes from './routes/auth';
import postRoute from './routes/posts';
import uploadRoute from './routes/upload';
import { DEV_CLIENT_SIDE_BASE_URL, MONGO_URL, PROD_CLIENT_SIDE_BASE_URL } from './constants';

const app = express();
const PORT = 4000;
require('dotenv').config();

// Connect database
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log('connecting DB...');
  })
  .catch((err) => {
    console.log(err);
  });

// Middleware
app.use(
  cors({
    origin: [PROD_CLIENT_SIDE_BASE_URL, DEV_CLIENT_SIDE_BASE_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoute);
app.use('/api/upload', uploadRoute);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => console.log('server running'));
