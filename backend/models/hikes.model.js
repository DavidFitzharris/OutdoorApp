const mongoose = require('mongoose');

//Creating a new database 'Schema'
const Schema = mongoose.Schema;

//For storing hike history
const HikeSchema = Schema({
  routeName: { type: String },
  distance: { type: Number},
  difficulty: { type: String },
  hikeDetails: { type: String }
});

module.exports = mongoose.model('Hike', HikeSchema);