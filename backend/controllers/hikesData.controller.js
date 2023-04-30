const Hikes = require('../models/hikes.model');
const User = require('../models/user.model');


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
        
        // Update the user's hikingHistory with the saved hike
        const user = await User.findOne({ email: req.body.userEmail });

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