const mongoose = require("mongoose");

const snackSchema = new mongoose.Schema(
  {
    item: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Snack = mongoose.model("Snack", snackSchema);
module.exports = Snack;
