import userModel from '../models/userModel';

const userService = {
  getAllUsers: async () => {
    const users = await userModel.find();
    return users;
  },
};

export default userService;
