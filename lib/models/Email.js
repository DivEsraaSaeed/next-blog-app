import mongoose from "mongoose";
const Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now(),
  },
});
const Email = mongoose.models.Email || mongoose.model("Email", Schema);
export default Email;
