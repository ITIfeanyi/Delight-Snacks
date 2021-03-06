const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    snack: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Snack",
      required: true,
    },
    qty: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
