const mongoose = require("mongoose");

//connect to a database
const connectDB = () => {
  mongoose.connect("mongodb://localhost/kubo_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};

module.exports = connectDB;
