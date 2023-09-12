const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to mongoDB Atlas");
    })
    .catch(() => {
      console.error("Error connecting to mongoDB Atlas", error);
    });
};

module.exports = connectDB;
