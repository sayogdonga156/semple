const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://sayogdonga156156:4rxwMVKZ0iLvSKRV@cluster0.fr3ikpp.mongodb.net/expense-management');
    console.log(`Connected Successfully`);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
