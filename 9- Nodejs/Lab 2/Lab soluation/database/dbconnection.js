import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => {
      console.log("Db connected succesfully..");
    })
    .catch((err) => {
      console.log("Error connecting", err);
    });
};
