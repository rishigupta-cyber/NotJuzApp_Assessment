import { Schema, model } from "mongoose";
import { hash, compare } from "bcrypt";

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "user" }
});

userSchema.pre("save", async function () {
  this.password = await hash(this.password, 12);
});

userSchema.methods.comparePassword = function (pwd) {
  return compare(pwd, this.password);
};

export default model("User", userSchema);