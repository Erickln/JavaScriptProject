import userService from '../services/userService';
import { User } from '../models/userModel';
import { UserResponse } from '../models/userModel'; // Add this import
import { mapUserResponse } from '../utils/userMapper';

export class UsersController {
  public static async getAllUsers(): Promise<UserResponse[]> {
    const users = await userService.getAllUsers();
    return users.map((user: User) => mapUserResponse(user));
  }
}
