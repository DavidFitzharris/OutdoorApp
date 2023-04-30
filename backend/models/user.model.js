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
  salt: { type: String, required:true},
  hikingHistory: [{ type: Schema.Types.ObjectId, ref: 'Hike' }]
});

// //For storing hike history
// const hikingHistory = Schema({
//   routeName: { type: String },
//   distance: { type: Number},
//   difficulty: { type: String },
//   hikeDetails: { type: String }
// });


module.exports = mongoose.model('User', UserSchema);



