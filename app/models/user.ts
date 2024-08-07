import mongoose, { Document, Schema } from 'mongoose';



enum Level {
  admin = 'admin',
  worker = 'worker',
}
//User Interface
export interface IUser extends Document {
  email: string,
  password: string,
  firstname: string,
  lastname: string,
  level: Level,
}
// Define the user schema
const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: false, // It's better to use `required` instead of `require`
  },
  level: {
    type: String,
    enum: Object.values(Level),  // Ensure level is one of the enum values
    required: false,
  },
});


// Create models based on the schemas
const user = mongoose.model<IUser>('User', userSchema, 'users');
//const OAuthUser = model('OAuthUser', oauthUserSchema, 'users');

export default user;
