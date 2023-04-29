const mongoose = require('mongoose');

//Creating a new database 'Schema'
const Schema = mongoose.Schema;

// //User schema
// const UserSchema = new Schema({
//   name: String,
//   email: String,
//   password: String
// })

//For user details
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  //Save unique salt that will be used when logging in
  salt: { type: String},
  //creating a map for hiking history
  hikingHistory: [{ type: Map, of: String, ref: 'Hike' }]
});

module.exports = mongoose.model('User', UserSchema);