import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

export default models.User || model('User', userSchema);
