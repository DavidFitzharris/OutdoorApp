const { time } = require('console');
const mongoose = require('mongoose');

//Creating a new database 'Schema'
const Schema = mongoose.Schema;

//For storing hike history
const HikeSchema = Schema({
  routeName: { type: String, required: true },
  distance: { type: Number, required: true },
  difficulty: { type: String, required: true  },
  hikeDetails: { type: String },
  dateSet: {type: Date, required: true}
});

module.exports = mongoose.model('Hike', HikeSchema);