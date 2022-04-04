const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const dotenv = require("dotenv");

dotenv.config();

// Connect to MongoDB database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
  const app = express();
  app.use(express.json());
  app.use("/api", routes);

  app.listen(5000, () => {
    console.log("Server has started!");
  });
});
