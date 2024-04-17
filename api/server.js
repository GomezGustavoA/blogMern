const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const server = express();
const PORT = process.env.PORT || 5000;

server.use(express.json());
server.use(cors());
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to mongoDB atlas"))
  .catch((err) => console.log(err));

server.listen(PORT, () => console.log("server listening on port", PORT));
