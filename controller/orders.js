const Orders = require("../modal/orderSchema");
const User = require("../modal/userSchema");

const Snack = require("../modal/snacksSchema");

module.exports.post_orders = async (req, res) => {
  const { snack, qty, name } = req.body;
  try {
    const newOrders = new Orders({
      snack,
      qty,
    });
    const newSnack = await Snack.findById(snack);
    const user = await User.findById(`${name}`);
    await user.orders.push(`${newOrders._id}`);
    await user.save();

    newSnack.qty = newSnack.qty - qty;
    await newSnack.save();

    await newOrders.save();

    res.status(201).json({
      item: {
        name: newSnack.name,
        qty: +qty,
        price: newSnack.price,
        totalprice: newSnack.price * qty,
      },
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
