const jwt = require("jsonwebtoken");
const User = require("../modal/userSchema");
const Snack = require("../modal/snacksSchema");

const checkVerification = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, `${process.env.jwtSecret}`, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/login");
      } else {
        next();
        return decodedToken.id;
      }
    });
  } else {
    res.redirect("/login");
  }
};

const getUserName = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, `${process.env.jwtSecret}`, async (err, Decodeduser) => {
      if (err) {
        next();
        res.locals.user = null;
        res.locals.snacks = null;
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
    res.locals.snacks = null;

    next();
  }
};

// const getSnacks = async (req, res, next) => {
//   const token = req.cookies.jwt;
//   if (token) {
//     jwt.verify(token, `${process.env.jwtSecret}`, async (err, Decodeduser) => {
//       if (err) {
//         next();
//         res.locals.snacks = null;
//       } else {
//         let snacks = await User.find({ Snacks });

//         res.locals.user = user;
//         res.locals.snacks = snacks;

//         next();
//       }
//     });
//   } else {
//     res.locals.user = null;
//     next();
//   }
// };

module.exports = { checkVerification, getUserName };
