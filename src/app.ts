import express from 'express';
import usersRouter from './routes/users';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
