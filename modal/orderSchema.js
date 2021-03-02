const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    itemOrder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Snack",
    },
    qty: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
