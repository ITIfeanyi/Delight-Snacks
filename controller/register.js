const User = require("../modal/userSchema");
const jwt = require("jsonwebtoken");

const handleError = (err) => {
  let error = { email: "", password: "" };
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
    return error;
  }
  if (err.code === 11000) {
    error.email = "This email is already in use.";
    return error;
  }
};

module.exports.register = (req, res) => {
  res.render("register", { title: "Sign Up" });
};

module.exports.register_post = async (req, res) => {
  res.clearCookie("jwt");
  const { name, email, password } = req.body;
  try {
    const newUser = new User({
      name,
      email,
      password,
    });
    await newUser.save(async (err, savedUser) => {
      if (err) {
        throw Error(err.message);
      } else {
        const token = await jwt.sign(
          { id: savedUser._id },
          `${process.env.jwtSecret}`,
          { expiresIn: "3d" }
        );
        res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 3,
        });
        res.status(200).json({ user: newUser._id });
      }
    });
  } catch (error) {
    const err = handleError(error);
    res.status(400).json({ err });
  }
};
