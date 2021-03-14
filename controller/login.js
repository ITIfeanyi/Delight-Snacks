const User = require("../modal/userSchema");
const jwt = require("jsonwebtoken");

const handleError = (err) => {
  let error = { email: "", password: "" };
  if (err.message === "Incorrect email") {
    error.email = "Incorrect email";
  }
  if (err.message === "Incorrect password") {
    error.password = "Incorrect password";
  }
  return error;
};

module.exports.login = (req, res) => {
  res.render("login", { title: "Login" });
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = await jwt.sign({ id: user._id }, `${process.env.jwtSecret}`, {
      expiresIn: "3d",
    });
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 3,
    });
    res.header("jwtheader", token);
    res.status(200).json({ user: user._id });
  } catch (error) {
    const errors = handleError(error);
    res.status(400).json({ errors });
  }
};
