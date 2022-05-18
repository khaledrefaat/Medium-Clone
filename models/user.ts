import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  username: String,
  email: String,
  image: String,
  userId: String,
});

export default models.User || model('User', userSchema);
