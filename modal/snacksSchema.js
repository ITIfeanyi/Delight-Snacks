const mongoose = require("mongoose");

const snackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Snack = mongoose.model("Snack", snackSchema);
module.exports = Snack;
