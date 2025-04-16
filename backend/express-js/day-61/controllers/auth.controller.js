export const login = (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({
      error: "username is required",
    });
  }

  // store user data in session

  req.session.user = { username };

  // set a cookie

  res.cookie("username", username, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  });

  res.status(200).json({
    message: "Login Successful",
    username,
  });
};

export const logout = (req, res) => {
    res.clearCookie("username"); // Clear the username cookie
  
    req.session.destroy((err) => { // Destroy the session
      if (err) {
        return res.status(500).json({ error: "Error logging out" });
      }
      res.json({ message: "Logout Successful" });
    });
  };