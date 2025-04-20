import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
//   get the token from the bearer header
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    res.status(500).json({
      message: "Invalid token",
      error: error,
    });
  }
};
