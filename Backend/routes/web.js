import { Router } from "express";
import NoteController from "../Controllers/NoteController.js";
import authenticateToken from "../middleware/auth.js";
import UserController from "../Controllers/UserController.js";

const router = Router();


// Requests
router.post('/signup', UserController.Signup)
router.post('/login', UserController.Login)
router.post('/notes/add', authenticateToken, NoteController.addNotes)
router.get('/notes/get/user',authenticateToken, NoteController.allNotes)
router.put('/notes/update/:noteid', authenticateToken, NoteController.updateNotes)
router.delete('/notes/delete/:noteid', authenticateToken, NoteController.deleteNotes)

export default router;
