const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://delight_snacks:W1iepkstLci1rnrS@cluster0.ecyvm.mongodb.net/delight-snacks?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      throw new Error("Unable to connect database");
    }
    console.log(`Application connected to the database`);
  }
);
