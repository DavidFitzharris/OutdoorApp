const express = require('express');
const router = express.Router();
const authController = require('./controllers/auth.controller');
const hikesData = require('./controllers/hikesData.controller');

//For Login
router.post('/userlogin', authController.login);

//For registration
router.post('/register', authController.register);

//For registration
router.post('/hikeData', hikesData.newHike);

module.exports = router;