import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  id: number;
  prefix: string;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  companyName: string;
}

export interface UserCredentials {
  // Define the properties for user credentials (e.g., username, password)
  username: string;
  password: string;
}

export interface UserResponse {
  id: number;
  prefix: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  geolocation: string;
  companyName: string;
}

const userSchema = new Schema<User>({
  id: { type: Number, required: true },
  prefix: { type: String, default: '' },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: true },
    geo: {
      lat: { type: String, required: true },
      lng: { type: String, required: true },
    },
  },
  companyName: { type: String, required: true },
});

export const userModel = mongoose.model<User>('User', userSchema);
