import { Document } from 'mongoose';

export class User extends Document {
  description: string;
  completed: boolean;
}
