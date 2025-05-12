import User from "../models/user.model.js";
import Company from "../models/company.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const getAllCompaniesByUser = async ( req , res)=>{
  try {
    const companies = await Company.find({ createdBy: req.user.id });
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

export const register = async (req, res) => {
  try {
    const { name, email, mobileNumber, password, role } = req.body;

    if (!name || !email || !mobileNumber || !password || !role?.length) {
      return res.status(400) .json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 20);

    const user = await User.create({
      name,
      email,
      mobileNumber,
      role,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      })
      .status(201)
      .json({
        message: "User registered Successfully",
        user: {
          id: user._id,
          name: user.name,
          role: user.role,
        },
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "Login successful",
        user: { id: user._id, name: user.name, role: user.role },
      });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("token")
    .status(200)
    .json({ message: "Logged out successfully" });
};

export const getCurrentUser = async (req, res) => {
  try {
    const user = req.user;
    const DBUser = await User.findById(user.id).select("-password");
    res.status(200).json(DBUser);
  } catch (error) {
    res.status(401).json({ message: "Invalid token", error: error.message });
  }
};
