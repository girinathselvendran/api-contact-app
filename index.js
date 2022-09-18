const express = require("express");
// const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
// const routes = require("./routes/routes");
require("dotenv").config();

const port = process.env.PORT || 4001;

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ status: "node js running" });
});

// app.use("/api/v1", routes);

app.listen(port, (err) => {
  console.log("server running");
});

//mongoose connection
// mongoose.connect(process.env.MONGODB_URL, (err) => {
//   if (err) throw err;
//   console.log("Database Connected");
// });
