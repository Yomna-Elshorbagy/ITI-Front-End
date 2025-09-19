import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const todoSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  }
});
export default mongoose.model("Todo", todoSchema);
