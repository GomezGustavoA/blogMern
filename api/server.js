const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./src/routes/mainRoutes");
const CustomError = require("./src/utils/handlerErrors");
require("dotenv").config();

const server = express();
const PORT = process.env.PORT || 5000;

//middleware
server.use(express.json());
server.use(cors());
server.use("/api", routes);

//DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to mongoDB atlas"))
  .catch((err) => console.log(err));

server.listen(PORT, () => console.log("server listening on port", PORT));
