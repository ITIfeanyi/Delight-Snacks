const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//Routes
snacksRoutes = require("./Routes/snackRoute");

app.use(expressLayouts);
app.set("view engine", "ejs");

app.use("/", snacksRoutes);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
