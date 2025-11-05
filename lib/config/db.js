import mongoose from "mongoose";

export const ConnectDB = async () => {
        await mongoose.connect('mongodb+srv://Esraa:esraasaeed13579@cluster0.k2yxiqo.mongodb.net/blog-app');
  console.log("MongoDB connected");
}