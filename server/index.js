import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vm55gvm55g:password7788@cluster0.22wnb.mongodb.net/linkhub?retryWrites=true&w=majority"
    );
    console.log("DB connection");
  } catch (err) {
    console.log("connection failed", err);
  }
};
