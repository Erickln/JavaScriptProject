import express from 'express';
import { MongoClient } from 'mongodb';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = 3000;

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'myDatabase';
const collectionName = 'users';

app.use(express.json());

// Connect to MongoDB and start the
