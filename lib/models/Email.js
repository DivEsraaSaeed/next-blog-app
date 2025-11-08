import mongoose from "mongoose";
// mongoose.models = {};
const Schema = new mongoose.Schema({
  email: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});
const Email = mongoose.models.Email || mongoose.model("Email", Schema);
export default Email;
