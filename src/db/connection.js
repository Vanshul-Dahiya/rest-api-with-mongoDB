// connect to database using mongoose
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://0.0.0.0:27017/olympics", {})
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log(e.message);
  });
