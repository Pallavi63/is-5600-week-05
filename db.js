const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/lab4db'; // no username/password
mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

module.exports = mongoose
