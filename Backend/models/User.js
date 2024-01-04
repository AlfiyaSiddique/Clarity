import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: 6,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    maxLength: 20,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

// Create a User model using the schema
const User = mongoose.model("User", userSchema);

export default User;
