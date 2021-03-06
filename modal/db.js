const mongoose = require("mongoose");

mongoose.connect(
  `mongodb://localhost:27017/delight-snacks`,
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
