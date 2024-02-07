import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { DEV_CLIENT_SIDE_BASE_URL, MONGO_URL, PROD_CLIENT_SIDE_BASE_URL } from './constants';
import authRoutes from './routes/auth.routes';
import postRoute from './routes/posts.routes';
import uploadRoute from './routes/upload.routes';
import userRoute from './routes/users.routes';

const app = express();
const PORT = 4000;

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
app.use('/images', express.static(path.join(__dirname, '../src/public/images')));
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoute);
app.use('/api/upload', uploadRoute);

app.get('/', (req, res) => {
  res.send('Real-SNS Backend');
});

app.listen(PORT, () => console.log('server running'));
