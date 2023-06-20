import { User } from '../models/userModel';
import { UserResponse } from '../models/userModel'; // Add this import

export const mapUserResponse = (user: User): UserResponse => {
  return {
    id: user.id,
    prefix: '',
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    address: `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`,
    geolocation: `(${user.address.geo.lat}, ${user.address.geo.lng})`,
    companyName: user.companyName,
  };
};
