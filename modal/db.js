const mongoose = require("mongoose");

mongoose.connect(
  `${process.env.DB_URL}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      throw new Error("Unable to connect database");
    }
    console.log(`Application connected to the database`);
  }
);
