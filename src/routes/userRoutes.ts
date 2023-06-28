import { Router, Request, Response } from 'express';
import { authenticateUser } from '../utils/authentication';
import axios from 'axios';
import retry from 'async-retry';

const router = Router();

router.get('/', authenticateUser, async (req: Request, res: Response) => {
  try {
    const response = await retry(
      async () => {
        return axios.get('https://jsonplaceholder.typicode.com/users');
      },
      { retries: 3 }
    );

    const users = response.data.map((user: any) => ({
      id: user.id,
      prefix: '',
      firstName: user.name.split(' ')[0],
      lastName: user.name.split(' ')[1],
      email: user.email,
      address: `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`,
      geolocation: `(${user.address.geo.lat}, ${user.address.geo.lng})`,
      companyName: user.company.name,
    }));

    res.json(users);
  } catch (error) {
    console.error('Error retrieving user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
