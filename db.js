const mongoose = require("mongoose");

const connectToMongo = (mongoURI) => {
  mongoose.connect(mongoURI, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected to mongo");
    }
  });
};

module.exports = connectToMongo;
