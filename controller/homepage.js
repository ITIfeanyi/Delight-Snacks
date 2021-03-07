// const { getUserName } = require("../Auth/jwtVerification");

module.exports.home = (req, res) => {
  res.render("homepage", { title: "Pizza-Hunt" });
};
