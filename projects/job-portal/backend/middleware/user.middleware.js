import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET;

export const protect = (req, res, next) => {
  // Get the token from the cookies
  const token = req.cookies.token;
 
  console.log(token)

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded)
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};
