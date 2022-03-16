const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const TodoRoutes = require("./routes/todos");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Server connected");
  })
  .catch((err) => console.log(err));

app.use("/api/todos", TodoRoutes);

const port = process.env.PORT || 5000;
app.listen(port, console.log("App listening on port " + port));
