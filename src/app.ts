import express from 'express';
import usersRouter from './routes/users';
import loginRouter from './routes/login';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/users', usersRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
