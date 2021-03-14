const jwt = require("jsonwebtoken");
const User = require("../modal/userSchema");
const Snack = require("../modal/snacksSchema");

const checkVerification = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, `${process.env.jwtSecret}`, (err, decodedToken) => {
      if (err) {
        res.clearCookie("jwt");
        next();
      } else {
        next();
        return decodedToken.id;
      }
    });
  } else {
    next();
  }
};

const getUserName = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, `${process.env.jwtSecret}`, async (err, Decodeduser) => {
      if (err) {
        res.locals.user = null;
        let snacks = await Snack.find({});
        res.locals.snacks = snacks;

        next();
      } else {
        let user = await User.findById(Decodeduser.id);
        let snacks = await Snack.find({});

        res.locals.user = user;
        res.locals.snacks = snacks;

        next();
      }
    });
  } else {
    res.locals.user = null;
    let snacks = await Snack.find({});

    res.locals.snacks = snacks;

    next();
  }
};

module.exports = { checkVerification, getUserName };
