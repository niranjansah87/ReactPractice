// const mongoose=require('mongoose');
// const mongoURI="mongodb://localhost:27017/";
// const connectToMongoose = () => {
//     mongoose.connect(mongoURI,()=>{console.log("Connected Successfully")}); 
//     // connect to database   
// }
// module.exports = connectToMongoose;


const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/";

const connectToMongoose = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected Successfully");
    // Your logic after successful connection
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    // Handle the error
  }
};

module.exports = connectToMongoose;
