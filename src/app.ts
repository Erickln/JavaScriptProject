import express from 'express';
import mongoose from 'mongoose';
import usersRouter from './routes/users';

const app = express();
const PORT = 3000;

// Connect to MongoDB
const uri = 'mongodb://127.0.0.1:27017/myDatabase'; // Replace 'myDatabase' with your database name
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(express.json());

app.use('/users', usersRouter);
