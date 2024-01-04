import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
/**
 * @route {POST} /api/signup
 * @description Create a new user
 * @access public
 */
const Signup = async (req, res) => {
  try {
    const encryptPassword = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({ ...req.body, password: encryptPassword });

    const user = await User.findOne({ email: req.body.email });

    if (user)
      return res
        .status(400)
        .json({ success: false, message: "Email Already Registered" });

    const createdUser = await newUser.save();
    const token = jwt.sign({ userId: createdUser._id }, process.env.SECRET, {
      expiresIn: "2d",
    });
    res.status(201).json({ success: true, user: createdUser, token: token, message: "User Created Successfully" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, message: "Internal server error" });
  }
};


/**
 * @route {POST} /api/usernames
 * @description Authenticates an User
 * @access public
 */
const Login = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email});

    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "User not Exist" });

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect Password" });

    // If the password is correct, generate a JWT token
    const token = jwt.sign(
      { userId: user._id},
      process.env.SECRET,
      {
        expiresIn: "30d",
      }
    );
    res.status(200).json({ success: true, user: user, token: token, message: "Login Successful" });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const UserController = {
  Signup,
  Login,
};

export default UserController;
