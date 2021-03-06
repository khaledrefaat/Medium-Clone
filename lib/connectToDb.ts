import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside the .env.local'
  );
}

let global: any = {};

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDb() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      socketTimeoutMS: 30000,
    };
    if (MONGODB_URI) {
      cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
        return mongoose;
      });
    }
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDb;
