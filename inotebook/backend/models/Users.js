const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
    
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
    password:{
        type:String,
        required:true
    },
    date:{type:Date,
        default:Date.now
    }
  }

);


const User = mongoose.model('User', UserSchema);
User.createIndexes();
// Create a new user instance
// const newUser = new User({
//   name: 'John Doe',
//   email: 'john.doe@example.com',
//   password: 'securepassword',
// });

// // Save the user to the database
// newUser.save()
//   .then((savedUser) => {
//     console.log('User saved successfully:', savedUser);
//   })
//   .catch((error) => {
//     console.error('Error saving user:', error.message);
//   });
module.exports = User;