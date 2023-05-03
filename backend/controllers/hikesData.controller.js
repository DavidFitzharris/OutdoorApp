const { WritableStreamDefaultController } = require('node:stream/web');
const Hikes = require('../models/hikes.model');
const User = require('../models/user.model');

//Exporting hike data
exports.newHike = async (req, res) => {
    try {

        //Get user by email logged in
        const user = await User.findOne({ email: req.body.userEmail });
        //Create new hike data, using hike data schemafrom models
        const newHike = new Hikes({
            routeName: req.body.route,
            distance: req.body.distance,
            difficulty: req.body.difficulty,
            hikeDetails: req.body.hikeDetails,
            dateSet: new Date()
        });

        // Save the new hike
        const savedHike = await newHike.save();

        // if (user) {
        //     return res.status(201).json({ message: 'User Found.' });
        //   }else{
        //     return res.status(401).json({ message: 'User Not Found.' });
        //   }

        //Creates an objectid within the schema, and myDatabes/hikes stores hike data (from hikes.model)
        user.hikingHistory.push(savedHike);
        await user.save();


        //Send a success response
        res.status(201).json({
            message: 'Hike data successfully.',
            routeName: savedHike.routeName,
            distance: savedHike.distance,
            difficulty: savedHike.difficulty,
            hikeDetails: savedHike.hikeDetails,
            userEmail: req.body.userEmail
        });
    } catch (error) {
        //Send an error response
        res.status(500).json({ message: 'Server error. Make sure your logged in and Please try again later.' });
    }
};

//Getting hike data and populating
exports.getUserHikes = async (req, res) => {
    try {
        //Get the user by email and populate the hikingHistory field using populate
        const user = await User.findOne({ email: req.params.email }).populate('hikingHistory');

        if (!user) {
            return res.status(401).json({ message: 'User not found: ' + req.params.email });
        }

        // Return the populated hikingHistory array
        res.status(200).json({ hikingHistory: user.hikingHistory });
    } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }  
};

exports.deleteHike = async (req, res) => {
    try {
        //Find the user by email logged in
        const user = await User.findOne({ email: req.params.email });

        if (!user) {
            return res.status(401).json({ message: 'User not found: ' + req.params.email });
        }

        // Find the hike by _id and delete it
        await Hikes.deleteOne({ _id: req.params.hikeId });

        //Remove the hike reference from the user's hikingHistory array
        user.hikingHistory = user.hikingHistory.filter(hikeId => !hikeId.equals(req.params.hikeId));
        await user.save();

        // Send a success response
        res.status(200).json({ message: 'Hike deleted successfully.' });
    } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};
