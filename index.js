const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const { getUserName } = require("./Auth/jwtVerification");

require("./modal/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.set("trust proxy", 1);
app.use(
  cookieSession({
    secret: `${process.env.secret}`,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secureProxy: true,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 3,
    },
  })
);

//cross origin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Method", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//Routes
const homepage = require("./Routes/homepageRoute");
const snacksRoutes = require("./Routes/snackRoute");
const orderRoutes = require("./Routes/orderRoute");
const loginRoute = require("./Routes/login");
const registerRoute = require("./Routes/register");
const logout = require("./Routes/logout");

app.set("view engine", "ejs");

app.get("*", getUserName);
app.use("/", homepage);
app.use("/", snacksRoutes);
app.use("/", orderRoutes);
app.use("/", loginRoute);
app.use("/", registerRoute);
app.use("/", logout);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
