import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
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
  address: { type: String, required: true },
  geolocation: { type: String, required: true },
  companyName: { type: String, required: true },
});

const userModel = mongoose.model<User>('User', userSchema);

export default userModel;
