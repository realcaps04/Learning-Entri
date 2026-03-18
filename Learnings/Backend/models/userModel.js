const mongoose = require("mongoose"); // Importing the Mongoose library to interact with MongoDB

const userSchema = new mongoose.Schema({ // Defining a schema for the User model with fields for name, email, and password
  name: String,
  email: String,
  password:String
});

const userModel = mongoose.model("User", userSchema); // Creating a Mongoose model named "User" based on the defined schema
