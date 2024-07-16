import mongoose from "mongoose";

const mongoSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  place: {
    type: String,
    require: true,
  },
});
const userModel = mongoose.model("s", mongoSchema);
export default userModel;
