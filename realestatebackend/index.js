const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/userRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const { tokenValidator } = require("./bcrypt/token");
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_URL, () => console.log("Database Connected"));

app.use(express.json());
// app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hi");
});
// app.use("/api/property", async (req, res, next) => {
//   let tokenChecker = await tokenValidator(req.body.token, process.env.JWT_KEY);

//   if (tokenChecker) {
//     req.user = tokenChecker.email;
//     console.log(req.user);
//     next();
//   } else {
//     return res.status(403).json({
//       status: "failed",
//       message: "Invalid token",
//     });
//   }
// });
app.use("/api/users", authRoutes);
app.use("/api/property", propertyRoutes);
app.listen("8000", () => console.log("Server Connected at 8000"));
