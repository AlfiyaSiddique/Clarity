import Note from "../models/Note.js";

/**
 * @route {POST} /api/notes/add
 * @description Add a Note to database
 * @access private
 */

const addNotes = async (req, res) => {
  try {
    const data = {...req.body, userid: req.user.userId}
    const newNote = new Note(data);
    const saved = await newNote.save();
    return res
      .status(201)
      .json({ success: true, message: "Note Added Successfully", ...saved._doc });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, message: "Internal server error" });
  }
};

/**
 * @route {POST} /api/notes/get/user
 * @description Returns all notes in result
 * @access public
 */
const allNotes = async (req, res) => {
  try {
    const notes = await Note.find({userid: req.user.userId});
    return res.status(200).json({ success: true, message: "All Notes are returned", notes });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, message: "Internal server error" });
  }
};

/**
 * @POST /api/notes/update/:noteid
 * @description Updates a Recipe
 * @access private
 */
const updateNotes = async (req, res) => {
  try {
    const update = await Note.updateOne(
      { _id: req.params.noteid },
      { $set: req.body },
      { new: true }
    );
    return res
      .status(200)
      .json({ success: true, message: "Note Updated Successfully", ...update });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, message: "Internal server error" });
  }
};

/**
 * @POST /api/notes/delete
 * @description Deletes a Recipe
 * @access private
 */
const deleteNotes = async (req, res) => {
  try {
    await Note.deleteOne({ _id: req.params.noteid });
    return res.status(200).json({ success: true, message: "Note deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, message: "Internal server error" });
  }
};

const NoteController = {
  addNotes,
  allNotes,
  updateNotes,
  deleteNotes,
};

export default NoteController;


