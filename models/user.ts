import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  username: String,
  email: String,
  image: String,
  socialId: String,
  following: [String],
});

export default models.User || model('User', userSchema);
