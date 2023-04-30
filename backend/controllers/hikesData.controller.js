const Hikes = require('../models/hikes.model');


exports.newHike = async (req, res) => {
    try {
        //Create new hike data, using hike data schemafrom models
        const newHike = new Hikes({
            routeName: req.body.route,
            distance: req.body.distance,
            difficulty: req.body.difficulty,
            hikeDetails: req.body.hikeDetails
        });

        // Save the new hike
        const savedHike = await newHike.save();


        //Send a success response
        res.status(201).json({
            message: 'Hike data successfully.',
            routeName: savedHike.routeName,
            distance: savedHike.distance,
            difficulty: savedHike.difficulty,
            hikeDetails: savedHike.hikeDetails
        });
    } catch (error) {
        //Send an error response
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};