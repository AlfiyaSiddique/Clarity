// models/Note.js
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 4,
    maxlength: 30, // Adjust the maximum length as needed
  },
  content: {
    type: String,
    required: true,
    trim: true,
    minlength: 20,
    maxlength: 200,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
   required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Note = mongoose.model('Note', noteSchema);

export default Note;
