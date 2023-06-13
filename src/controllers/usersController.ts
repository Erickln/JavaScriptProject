import userService from '../services/userService';

const usersController = {
  getAllUsers: async () => {
    const users = await userService.getAllUsers();
    return users.map((user: any) => ({
      id: user.id,
      prefix: '',
      firstName: user.name.split(' ')[0],
      lastName: user.name.split(' ')[1],
      email: user.email,
      address: `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`,
      geolocation: `(${user.address.geo.lat}, ${user.address.geo.lng})`,
      companyName: user.company.name,
    }));
  },
};

export default usersController;
