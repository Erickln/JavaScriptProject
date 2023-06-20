import { userModel, User } from '../models/userModel';

const userService = {
  getAllUsers: async (): Promise<User[]> => {
    const users = await userModel.find().lean();
    return users;
  },
};

export default userService;
