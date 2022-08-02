const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./userRouter");
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

app.use(cors());

app.use("/api", userRouter);

app.listen(1335, () => {
  console.log("server started");
});

mongoose.connect("mongodb://localhost:27017/userAuth", () => {
  console.log("Server Connected successfully");
});
