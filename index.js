require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./Database/connect");
const auth = require("./routes/userRoute");

// Handle unhandled exceptions
process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception: ${err.stack}`);
  console.log("Shutting down server due to uncaught exception");
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Promise Rejection:");
  console.error(reason);
  // Optionally, you can terminate the process here if needed.
});

//middleware
app.use(bodyParser.json());
app.use(express.json());

// ROUTE URIs
app.use("/api", auth);

// PORT details
const PORT = 2500 || process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1); // Terminate the process on error
  }
};

start();
