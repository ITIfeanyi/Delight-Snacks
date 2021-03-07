module.exports.logout_get = async (req, res) => {
  try {
    res.cookie("jwt", {
      maxAge: -1,
    });
    res.clearCookie("jwt");

    res.redirect("/");
  } catch (error) {
    if (error) {
      res.redirect("/");
      res.cookie("jwt", { maxAge: -1 });
    }
    res.clearCookie("jwt");
  }
};
