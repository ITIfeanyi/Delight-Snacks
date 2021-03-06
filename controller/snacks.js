const Snack = require("../modal/snacksSchema");

const handleError = (error) => {
  res.status(500).json(error);
};

module.exports.snacks_get = async (req, res) => {
  try {
    const snacks = await Snack.find({});
    res.status(200).json({ snacks: snacks });
  } catch (error) {
    handleError(error);
  }
};

module.exports.snacks_post = async (req, res) => {
  const { name, price, qty, description } = req.body;

  try {
    const newSnack = new Snack({
      name,
      price,
      qty,
      description,
    });
    await newSnack.save();
    res.status(201).json({ message: "item created successfully" });
  } catch (error) {
    handleError(error);
  }
};

module.exports.snacks_getOneByID = async (req, res) => {
  const ID = req.params.ID;
  try {
    const singleSnack = await Snack.findById(ID);
    res.status(200).json({ snack: singleSnack });
  } catch (error) {
    handleError(error);
  }
};
//delete item
module.exports.snacks_deleteOne = async (req, res) => {
  const ID = req.params.ID;
  try {
    await Snack.findByIdAndDelete(ID);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    handleError(error);
  }
};

//update single item
module.exports.snacks_updateSingle_item = async (req, res) => {
  const ID = req.params.ID;
  const itemUpdate = req.body;
  try {
    const item = await Snack.findByIdAndUpdate(
      { _id: ID },
      { $set: itemUpdate }
    );
    res.status(200).json({ updatedSnack: item });
  } catch (error) {
    console.log(error);
  }
};
