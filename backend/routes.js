const express = require('express');
const router = express.Router();
const authController = require('./controllers/auth.controller');
const hikesData = require('./controllers/hikesData.controller');

//For Login
router.post('/userlogin', authController.login);

//For registration
router.post('/register', authController.register);

//For posting hike data
router.post('/hikeData', hikesData.newHike);

//Getting hike data
router.get('/hikingHistory/:email', hikesData.getUserHikes);

//Delete hikes
router.delete('/deleteHike/:email/:hikeId', hikesData.deleteHike);

module.exports = router;