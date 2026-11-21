import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

const connectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI)
      .then((mongooseInstance) => {
        console.log("MongoDB Connection Success");
        return mongooseInstance;
      })
      .catch((error) => {
        cached.promise = null;
        console.error("MongoDB Connection Failed:", error.message);
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectDB;
